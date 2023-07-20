package org.petrax.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class CareProfessional {
    @Id
    @GeneratedValue
    private int id;

    private int userId;

    private String name;
    private String businessName;
    private String website;
    private String phoneNumber;

    public CareProfessional (){};

    public CareProfessional(String name, String businessName, String website, String phoneNumber) {
        this.name = name;
        this.businessName = businessName;
        this.website = website;
        this.phoneNumber = phoneNumber;
    }

    public int getId() {
        return id;
    }

    public int getUserId() {
        return userId;
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
