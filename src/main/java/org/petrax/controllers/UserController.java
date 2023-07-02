package org.petrax.controllers;

import org.petrax.data.UserRepository;
import org.petrax.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;

@Controller
@RequestMapping("users")
public class UserController {
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public String displayAllUsers(Model model) {
        model.addAttribute("title", "All Users");
        model.addAttribute("users", userRepository.findAll());
        return "users/index";
    }

    @GetMapping("create")
    public String displayCreateUserForm(Model model) {
        model.addAttribute("title", "Create User");
        model.addAttribute(new User());
        return "users/create";
    }

    @PostMapping("create")
    public String processCreateUserForm(@ModelAttribute @Valid User newUser,
                                        Errors errors, Model model) {
        if (errors.hasErrors()) {
            model.addAttribute("title", "Create User");
            return "users/create";
        }

        userRepository.save(newUser);
        return "redirect:";
    }

    @GetMapping("delete")
    public String displayDeleteUserForm(Model model) {
        model.addAttribute("title", "Delete Users");
        model.addAttribute("users", userRepository.findAll());
        return "users/delete";
    }

    @PostMapping("delete")
    public String processDeleteUsersForm(@RequestParam(required = false) int[] userIds) {
        if (userIds != null) {
            for (int id : userIds) {
                userRepository.deleteById(id);
            }
        }

        return "redirect:";
    }
}
