package org.petrax.models;

public enum  PetType {

    CAT("Cat"),
    DOG("Dog"),
    BIRD("Bird"),
    FISH("Fish"),
    REPTILE("Reptile"),
    OTHER("Other");


    private final String petType;
    PetType(String petType) {
        this.petType = petType;
    }
    public String getPetType() {
        return petType;
    }

}
