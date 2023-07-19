package org.petrax.models.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class LoginFormDTO {
    public String getUsername() {
        return null;
    }

    public String getPassword() {
        return null;
    }

    public class LoginFormDto {

        @NotNull
        @NotBlank
        @Size(min = 3, max = 20, message = "Invalid username. Must be between 3 and 20 characters.")
        private String username;

        @NotNull
        @NotBlank
        @Size(min = 5, max = 30, message = "Invalid password. Must be between 5 and 30 characters.")
        private String password;



        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

    }
}
