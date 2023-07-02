package org.petrax.models;

public enum UserType {

    USER ("User"),;

    private final String displayName;

    UserType(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
}