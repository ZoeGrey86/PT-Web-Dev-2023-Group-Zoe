package org.petrax.controllers;
import org.petrax.data.UserRepository;
import org.petrax.models.User;
import org.petrax.models.dto.LoginFormDTO;
import org.petrax.models.dto.RegisterFormDTO;
import org.petrax.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.Optional;


@Controller
@RequestMapping("authentication")
public class AuthenticationController {
    @Autowired
    public
    UserRepository userRepository;

    @Autowired
    private UserService userService;



    // The key to store user IDs
    private static final String userSessionKey = "user";



    public User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(userSessionKey);
        if (userId == null) {
            return null;
        }
        Optional<User> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            return null;
        }
//        return user.get(); //***replace with return user.orElse(null); ??
        return user.orElse(null);
    }
    // Stores key/value pair with session key and user ID
    private static void setUserInSession(HttpSession session, User user) {
        session.setAttribute(userSessionKey, user.getId());
    }
    @GetMapping("authentication/")
    public String displayAuthenticationIndex() {
        return "authentication/index";
    }

    // Handlers for registration form
//    @GetMapping("/register") //***remove slash?
    @GetMapping("/register")
    public String displayRegistrationForm(Model model) {
        model.addAttribute("Create an Account", "Register");
        model.addAttribute("registerFormDTO", new RegisterFormDTO());
        model.addAttribute(new RegisterFormDTO()); //***should this be (new User()) ?
//        model.addAttribute(new User());
        return "authentication/register";
    }

    @PostMapping("/register")
    public String processRegistrationForm(@ModelAttribute @Valid RegisterFormDTO registerFormDTO,
                                          Errors errors, HttpServletRequest request,
                                          Model model) {

        // Send user back to form if errors are found
        if (errors.hasErrors()) {
            model.addAttribute("title", "Register");
            return "authentication/register";
        }

        // Look up user in database using email they provided in the form
        User existingUser = userRepository.findByContactEmail(registerFormDTO.getContactEmail());

        // Send user back to form if username already exists
        if (existingUser != null) {
            errors.rejectValue("username", "username.alreadyexists", "A user with that username already exists");
            model.addAttribute("title", "Register");
            return "authentication/register";
        }
        // Send user back to form if passwords didn't match
        String password = registerFormDTO.getPassword();
        String verifyPassword = registerFormDTO.getVerifyPassword();
        if (!password.equals(verifyPassword)) {
            errors.rejectValue("password", "passwords.mismatch", "Passwords do not match");
            model.addAttribute("title", "Register");
            return "authentication/register";
        }

        // OTHERWISE, save new username and hashed password in database, start a new session, and redirect to home page
//        User newUser = new User(registerFormDTO.getFirstName(),registerFormDTO.getLastName(),registerFormDTO.getDescription(), registerFormDTO.getContactEmail(), registerFormDTO.getUsername(), registerFormDTO.getPassword());

        // Create a new user with hashed password and save it
        User newUser = userService.createUser(registerFormDTO);
        setUserInSession(request.getSession(), newUser);

        return "redirect:user/success";
    }
    // Handlers for login form
    @GetMapping("/login")
    public String displayLoginForm(Model model) {
        model.addAttribute(new LoginFormDTO());
        model.addAttribute("title", "Log In");
        return "authentication/login";
    }
    @PostMapping("/login")
    public String processLoginForm(@ModelAttribute @Valid LoginFormDTO loginFormDTO,
                                   Errors errors, HttpServletRequest request,
                                   Model model) {

        // Send user back to form if errors are found
        if (errors.hasErrors()) {
            model.addAttribute("title", "Log In");
            return "authentication/login";
        }

        // Look up user in database using username they provided in the form
        User theUser = userRepository.findByContactEmail(loginFormDTO.getContactEmail());

        // Get the hashed password from the user
        String hashedPassword = theUser.getPwHash();

        // Send user back to form if username does not exist OR if password hash doesn't match
        // "Security through obscurity" — don't reveal which one was the problem
        // Check if password matches
        if (theUser != null && userService.isMatchingPassword(theUser, loginFormDTO.getPassword())) {
            setUserInSession(request.getSession(), theUser);
            return "redirect:/authentication/success";
        } else {
            errors.rejectValue("password", "password.invalid", "Invalid password");
            model.addAttribute("title", "Log In");
            return "authentication/login";
        }
    }

    // Handler for logout
    @GetMapping("/logout")
    public String logout(HttpServletRequest request){
        request.getSession().invalidate();

//        return "redirect:/login"; //*** replace with return "redirect:/authentication/login"; ?
        return "redirect:/authentication/login";
    }
}