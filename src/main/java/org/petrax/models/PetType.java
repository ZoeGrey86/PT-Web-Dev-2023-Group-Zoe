package org.petrax.models;

public enum PetType {

    CAT("Cat"),
    DOG("Dog"),
    TURTLE("Turtle"),
    BIRD("Bird"),
    FISH("Fish"),
    LIZARD("Lizard"),
    RODENT("Rodent");

    private final String petType;
    PetType(String petType) {
        this.petType = petType;
    }
    public String getPetType() {
        return petType;
    }

}
