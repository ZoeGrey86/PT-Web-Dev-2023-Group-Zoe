package org.petrax.models;

public enum PetType {

    CAT("Cat"),
    DOG("Dog"),
    TURTLE("Turtle"),
    BIRD("Bird"),
    FISH("Fish"),
    REPTILE("Reptile"),
    SMALL_MAMMAL("Small Mammal"),
    LARGE_MAMMAL("Large Mammal");

    private final String petType;
    PetType(String petType) {
        this.petType = petType;
    }
    public String getPetType() {
        return petType;
    }

}
