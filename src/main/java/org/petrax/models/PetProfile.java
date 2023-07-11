package org.petrax.models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.Objects;

@Entity
public class PetProfile {

    //private fields petId, name, breed, age, weight, birthday, medications, allergies, microchip number, and diagnoses
    @Id
    @GeneratedValue
    private int petId;

    @NotBlank(message = "Name is required")
    @Size(min = 3, max = 50, message = "Name must be between 3 and 50 characters")
    private String name;

    @NotBlank(message = "Breed is required")
    @Size(min = 3, max = 50, message = "Breed must be between 3 and 50 characters")
    private String breed;

    @NotBlank(message = "Age is required")
    private double age;

    @NotBlank(message = "Weight is required")
    private double weight;

    @NotBlank(message = "Birthdate is required")
    private Date birthdate;

    @Size(max = 500, message = "Medications too long!")
    private String medication;

    @Size(max = 500, message = "Allergies too long!")
    private String allergy;

    @Size(max = 500, message = "Microchip number too long!")
    private String microchip; //some are alpha-numeric, so string not double

    @Size(max = 500, message = "Diagnoses too long!")
    private String diagnoses;

    //Enum class PetType
    @NotBlank(message = "Must select pet type")
    private PetType petType;

    //public constructor used to instantiate an object

    //Refresher: petId value not added since it will be auto-generated
    //automatically when the object is persisted or saved.
    public PetProfile(String name, String breed, double age, double weight, Date birthdate,
               String medication, String allergy, String microchip, String diagnoses, PetType petType) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.weight = weight;
        this.birthdate = birthdate;
        this.medication = medication;
        this.allergy = allergy;
        this.microchip = microchip;
        this.diagnoses = diagnoses;
        this.petType = petType; //enum declaration
    }


    //public empty constructor, what the JPA uses to instantiate an object (entity class)
    public PetProfile() {}


    //public getters & setters, no petId since petId it will be auto-generated
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public double getAge() {
        return age;
    }

    public void setAge(double age) {
        this.age = age;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public String getMedication() {
        return medication;
    }

    public void setMedication(String medication) {
        this.medication = medication;
    }

    public String getAllergy() {
        return allergy;
    }

    public void setAllergy(String allergy) {
        this.allergy = allergy;
    }

    public String getMicrochip() {
        return microchip;
    }

    public void setMicrochip(String microchip) {
        this.microchip = microchip;
    }

    public String getDiagnoses() {
        return diagnoses;
    }

    public void setDiagnoses(String diagnoses) {
        this.diagnoses = diagnoses;
    }

    public PetType getPetType() {
        return petType;
    }

    public void setPetType(PetType type) {
        this.petType = petType;
    }

    //public toString method of most relevant/identifying field petId

    //Refresher: Typically, you would include the fields that are most relevant or important
    //for understanding the state of the object. This can include fields that provide
    //key information or help identify the object. It's generally a good practice to
    //include a combination of important fields rather than blindly including all fields.
    @Override
    public String toString() {
        return "PetProfile{" +
                "petId=" + petId +
                '}';
    }

    //public equals method checks if two PetProfile objects are equal based on the petId field only
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PetProfile that = (PetProfile) o;
        return petId == that.petId;
    }


    //public hashCode method computes and returns an integer value that represents the object's hash code,
    // typically used for efficient storage and retrieval in hash-based data structures.

    //Refresher: The hashCode method is used in Java to generate a hash code for an object.
    //The hash code is an integer value that is typically used for efficient storage and
    //retrieval of objects in hash-based data structures like HashMap, HashSet, and others.
    //In the hashCode method you provided, the hash code is computed based on the petId field
    //using the Objects.hash method. By overriding the hashCode method, you ensure that
    //objects of the PetProfile class can be used properly in hash-based data structures.
    @Override
    public int hashCode() {
        return Objects.hash(petId);
    }


}
