package org.petrax.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Objects;
import org.petrax.models.SignUpRequest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
public class User {
    @Id
    @GeneratedValue
    private int id;


    @NotBlank(message = "Name is required")
    @Size(min = 3, max = 50, message = "Name must be between 3 and 50 characters")
    private String name;

    @Size(max = 500, message = "Description too long!")
    private String description;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email. Try again.")
    private String contactEmail;
    @NotNull
    public String username;

    private String password;
    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    private UserType type;

    public User() {
    }
    public User(String name, String description, String contactEmail, String username, String password) {
        this.name = name;
        this.description = description;
        this.contactEmail = contactEmail;
        this.username = username;
        this.password = encoder.encode(password);

    }

    public User(String name, String description, String contactEmail, UserType type, String username, String password) {
        this.name = name;
        this.description = description;
        this.contactEmail = contactEmail;
        this.username = username;
        this.password = encoder.encode(password);
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public UserType getType() {
        return type;
    }

    public void setType(UserType type) {
        this.type = type;
    }

    public int getId() {
        return id;
    }

    @Override
    public String toString() {
        return name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User event = (User) o;
        return id == event.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    public boolean isMatchingPassword(String password) {
        return false;
    }
}
