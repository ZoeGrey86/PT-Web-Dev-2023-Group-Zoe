package org.petrax.controllers;

import org.petrax.data.SignUpRepository;
import org.petrax.data.UserRepository;
import org.petrax.models.SignUpRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignUpController {
    @Autowired
    private SignUpRepository signUpRepository;

    @PostMapping("/register")
    public ResponseEntity<String> username(@RequestBody SignUpRequest request) {
        // Create a new User entity from the registration request data
        SignUpRequest signUpRequest = new SignUpRequest();
        signUpRequest.setUsername(request.getUsername());
        signUpRequest.setPassword(request.getPassword());
        signUpRequest.setEmail(request.getEmail());

        // Save the user to the database
        signUpRepository.save(signUpRequest);

        return ResponseEntity.ok("User registered successfully");
    }
}

