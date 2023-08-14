package org.petrax.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;
import org.petrax.models.PetType;

@Entity
public class PetProfile {

    //private fields petId, name, breed, age, weight, birthday, medications, allergies, microchip number, and diagnoses

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int petId;

    private String petName;
    private PetType petType;
    private String petBreed;
    private Double petAge;
    private Double petWeight;
    private Date petBirthdate;
    private String petMedication;
    private String petAllergy;
    private String petMicrochip;
    private String petDiagnoses;

    public int getPetId() {
        return petId;
    }

    public void setPetId(int petId) {
        this.petId = petId;
    }

    public String getPetName() {
        return petName;
    }

    public void setPetName(String petName) {
        this.petName = petName;
    }

    public PetType getPetType() {
        return petType;
    }

    public void setPetType(PetType petType) {
        this.petType = petType;
    }

    public String getPetBreed() {
        return petBreed;
    }

    public void setPetBreed(String petBreed) {
        this.petBreed = petBreed;
    }

    public Double getPetAge() {
        return petAge;
    }

    public void setPetAge(Double petAge) {
        this.petAge = petAge;
    }

    public Double getPetWeight() {
        return petWeight;
    }

    public void setPetWeight(Double petWeight) {
        this.petWeight = petWeight;
    }

    public Date getPetBirthdate() {
        return petBirthdate;
    }

    public void setPetBirthdate(Date petBirthdate) {
        this.petBirthdate = petBirthdate;
    }

    public String getPetMedication() {
        return petMedication;
    }

    public void setPetMedication(String petMedication) {
        this.petMedication = petMedication;
    }

    public String getPetAllergy() {
        return petAllergy;
    }

    public void setPetAllergy(String petAllergy) {
        this.petAllergy = petAllergy;
    }

    public String getPetMicrochip() {
        return petMicrochip;
    }

    public void setPetMicrochip(String petMicrochip) {
        this.petMicrochip = petMicrochip;
    }

    public String getPetDiagnoses() {
        return petDiagnoses;
    }

    public void setPetDiagnoses(String petDiagnoses) {
        this.petDiagnoses = petDiagnoses;
    }
}
