package org.petrax.controllers;

import org.petrax.data.UserRepository;
import org.petrax.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    public UserRepository userRepository;
 //   private static final String USER_SESSION_KEY = "user";
 @GetMapping("/all")
 public ResponseEntity<Iterable<User>> displayAllUsers() {
     return ResponseEntity.ok(userRepository.findAll());
 }

    @PostMapping("/register")
    public ResponseEntity<String> processCreateUserForm(@RequestBody @Valid User newUser, Errors errors) {
        if (errors.hasErrors()) {
            return ResponseEntity.badRequest().body(errors.getAllErrors().toString());
        }

        userRepository.save(newUser);
        return ResponseEntity.ok("Registration successful");
    }

    @PostMapping("/delete")
    public ResponseEntity<String> processDeleteUsersForm(@RequestParam(required = false) int[] userIds) {
        if (userIds != null) {
            for (int id : userIds) {
                userRepository.deleteById(id);
            }
        }
        return ResponseEntity.ok("Deletion successful");
    }
}