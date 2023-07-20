package org.petrax.models.dto;

import org.petrax.models.PetProfile;
import org.petrax.models.PetType;

import javax.validation.constraints.NotNull;

public class PetProfileDTO {

    @NotNull
    private PetProfile petProfile;

    @NotNull
    private PetType petType;

    public PetProfileDTO(){}

    public PetProfile getPetProfile() {
        return petProfile;
    }

    public PetType getPetType() {
        return petType;
    }

    public void setPetProfile(PetProfile petProfile) {this.petProfile = petProfile;}

    public void setPetType(PetType petType) {this.petType = petType;}
}
