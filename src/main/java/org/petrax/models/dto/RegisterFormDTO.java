package org.petrax.models.dto;

public class RegisterFormDTO {
    public String getUsername() {
        return null;
    }

    public String getPassword() {
        return null;
    }

    public String getVerifyPassword() {
        return null;
    }

    public class RegisterFormDto extends LoginFormDTO {

        private String username;
        private String password;
        private String verifyPassword;

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

        public String getVerifyPassword() {
            return verifyPassword;
        }

        public void setVerifyPassword(String verifyPassword) {
            this.verifyPassword = verifyPassword;
        }

    }
}
