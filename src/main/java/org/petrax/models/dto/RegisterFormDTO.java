package org.petrax.models.dto;

public class RegisterFormDTO {
    public String getUsername() {
        return getUsername();
    }

    public String getPassword() {
        return getPassword();
    }

    public String getVerifyPassword() {
        return getVerifyPassword();
    }

    public String getName() {
        return getName();
    }

    public String getDescription() {
        return getDescription();
    }

    public String getContactEmail() {
        return getContactEmail();
    }

    public class RegisterFormDto extends LoginFormDTO {
        private String name;
        private String description;

        private String contactEmail;
        private String username;
        private String password;
        private String verifyPassword;

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
