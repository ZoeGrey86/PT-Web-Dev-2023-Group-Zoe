package org.petrax.models.dto;

import javax.annotation.PostConstruct;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import javax.validation.ConstraintViolationException;
import java.util.HashSet;

public class RegisterFormDTO {

    @NotBlank(message = "First name is required.")
    @Size(min = 2, max = 30, message = "First name must be between 2 and 30 characters.")
    private String firstName;

    @NotBlank(message = "Last name is required.")
    @Size(min = 2, max = 30, message = "Last name must be between 2 and 30 characters.")
    private String lastName;

    @Size(max = 100, message = "Address can't exceed 100 characters.")
    private String address;

    @Email(message = "Invalid email format.")
    @NotBlank(message = "Email is required.")
    private String contactEmail;

    @NotBlank(message = "Password is required.")
    @Size(min = 5, message = "Password must be at least 5 characters.")
    private String password;

    @NotBlank(message = "Please confirm your password.")
    private String verifyPassword;

    @PostConstruct
    private void validatePasswords() {
        if (this.password != null && this.verifyPassword != null && !this.password.equals(verifyPassword)) {
            throw new ConstraintViolationException("Passwords do not match", new HashSet<>());
        }
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getVerifyPassword() {
        return verifyPassword;
    }

    public void setVerifyPassword(String verifyPassword) {
        this.verifyPassword = verifyPassword;
    }
}