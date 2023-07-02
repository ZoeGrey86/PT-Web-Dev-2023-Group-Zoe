package org.petrax;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class PETrax {
    public static void main(String[] args) {
        System.out.println("Starting PETrax application...");

        SpringApplication.run(PETrax.class, args);

        System.out.println("PETrax application started successfully.");
    }
}