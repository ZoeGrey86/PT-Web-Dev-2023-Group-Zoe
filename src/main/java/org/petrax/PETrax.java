package org.petrax;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
@EnableJpaRepositories("org.petrax.data")
//@EntityScan("org.petrax.models")
@ComponentScan(basePackages = "org.petrax")
public class PETrax {
    public static void main(String[] args) {
        System.out.println("Starting PETrax application...");

        SpringApplication.run(PETrax.class, args);

        System.out.println("PETrax application started successfully.");
    }
}