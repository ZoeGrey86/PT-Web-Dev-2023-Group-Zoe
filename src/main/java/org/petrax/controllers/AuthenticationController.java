package org.petrax.controllers;

import org.petrax.data.UserRepository;
import org.petrax.models.User;
import org.petrax.models.dto.LoginFormDTO;
import org.petrax.models.dto.RegisterFormDTO;
import org.petrax.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/users/authentication")
public class AuthenticationController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    public UserService userService;

    private static final String USER_SESSION_KEY = "user";

    public User getUserFromSession(HttpSession session) {
        Integer userId = (Integer) session.getAttribute(USER_SESSION_KEY);
        return userRepository.findById(userId).orElse(null);
    }


    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody @Valid RegisterFormDTO registerFormDTO,
                                               Errors errors) {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body("Invalid registration data");
        }

        // Check if the email is already registered
        User existingUser = userRepository.findByContactEmail(registerFormDTO.getContactEmail());
        if (existingUser != null) {
            return ResponseEntity.badRequest().body("Email already registered");
        }

        // Check if passwords match
        if (!registerFormDTO.getPwHash().equals(registerFormDTO.getPwHashConfirm())) {
            return ResponseEntity.badRequest().body("Passwords do not match");
        }

        User newUser = userService.createUser(registerFormDTO);
        // You might want to return the created user ID or a success message here
        return ResponseEntity.ok("Registration successful");
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody @Valid LoginFormDTO loginFormDTO,
                                            Errors errors,
                                            HttpSession session) {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body("Invalid login data");
        }

        User theUser = userRepository.findByContactEmail(loginFormDTO.getContactEmail());
        if (theUser == null || !userService.isMatchingPassword(theUser, loginFormDTO.getPassword())) {
            return ResponseEntity.badRequest().body("Invalid email or password");
        }

        session.setAttribute(USER_SESSION_KEY, theUser.getId());
        return ResponseEntity.ok("Login successful");
    }

    @GetMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok("Logout successful");
    }
}
