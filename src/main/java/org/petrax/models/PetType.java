package org.petrax.models;

public enum PetType {

    CAT("Cat"),
    DOG("Dog"),
    BIRD("Bird"),
    FISH("Fish"),
    REPTILE("Reptile"),
    OTHER("Other");
    //other category with blank field they can edit

    private final String petType;
    PetType(String petType) {
        this.petType = petType;
    }
    public String getPetType() {
        return petType;
    }

}
