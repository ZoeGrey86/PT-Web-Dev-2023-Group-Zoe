package org.petrax.models;


import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
@Entity
public class SignUpRequest extends AbstractEntity{

    @NotBlank(message = "Name is required")
    private String name;
    @NotBlank
    public String username;
    private String password;
    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    public SignUpRequest(String name, String username,String password) {
        super();
        this.name = name;
        this.username = username;
        this.password = password;
    }

    public SignUpRequest() {

    }

    public SignUpRequest(String username, String password) {
    }

    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isMatchingPassword(String password) {
        return false;
    }
}

