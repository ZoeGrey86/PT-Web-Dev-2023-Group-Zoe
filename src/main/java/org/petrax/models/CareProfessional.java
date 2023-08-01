package org.petrax.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class CareProfessional {
    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @NotBlank(message = "This field is Required.")
    private String careType;

    @NotBlank(message = "This field is required")
    private String name;
    private String businessName;
    private String website;
    @NotBlank(message="This field is required")
    private String phoneNumber;

    public CareProfessional (){};

    public CareProfessional(String name, String businessName, String website, String phoneNumber, String careType) {
        this.name = name;
        this.businessName = businessName;
        this.website = website;
        this.phoneNumber = phoneNumber;
        this.careType= careType;
    }

    public int getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public String getCareType() {
        return careType;
    }

    public void setCareType(String careType) {
        this.careType = careType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
