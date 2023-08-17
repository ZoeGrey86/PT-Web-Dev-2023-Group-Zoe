package org.petrax.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    // This could return some basic information for the login page, if necessary.
    @GetMapping("/")
    public ResponseEntity<String> defaultPage() {
        return ResponseEntity.ok("Welcome to the login page!");
    }

    // This represents the landing page after a user logs in.
    @GetMapping("/landing")
    public ResponseEntity<String> getLandingPage() {
        return ResponseEntity.ok("Welcome to the landing page!");
    }
}
