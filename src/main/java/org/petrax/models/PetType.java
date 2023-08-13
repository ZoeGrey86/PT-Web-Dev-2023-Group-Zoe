package org.petrax.models;

public enum PetType {
    CAT("🐈"),
    DOG("🐕"),
    BIRD("🦜"),
    FISH("🐠"),
    REPTILE("🦎"),
    OTHER("❤️");

    private final String petType;

    PetType(String petType) {
        this.petType = petType;
    }

    public String getPetType() {
        return petType;
    }
}
