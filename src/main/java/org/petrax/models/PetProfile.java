package org.petrax.models;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Date;
import java.util.Objects;

@Entity
public class PetProfile {

    //private fields petId, name, breed, age, weight, birthday, medications, allergies, microchip number, and diagnoses
    @Id
    @GeneratedValue
    private int petId;

//    @NotBlank(message = "Name is required")
    @Size(min = 3, max = 50, message = "Name must be between 3 and 50 characters")
    private String name;

    //Enum class PetType
//    @NotNull(message = "Must select pet type")
    private PetType petType;

//    @NotBlank(message = "Breed is required")
    @Size(min = 3, max = 50, message = "Breed must be between 3 and 50 characters")
    private String breed;

//    @NotNull(message = "Age is required")
    private Double age;

//    @NotNull(message = "Weight is required")
    private Double weight;

    @Past(message = "Birthdate must be in the past")
//    @NotNull(message = "Age is required")
    private Date birthdate;

    @Size(max = 500, message = "Medications too long!")
    private ArrayList<String> medication = new ArrayList<>(); //ArrayList since one pet can have multiple

    @Size(max = 500, message = "Allergies too long!")
    private ArrayList<String> allergy = new ArrayList<>(); //ArrayList since one pet can have multiple

    @Size(max = 500, message = "Microchip number too long!")
    private String microchip; //Some microchip #s are alpha-numeric, so string not double

    @Size(max = 500, message = "Diagnoses too long!")
    private ArrayList<String> diagnoses = new ArrayList<>(); //ArrayList since one pet can have multiple


    //public constructor used to instantiate an object
    //Refresher: petId value not added since it will be auto-generated
    //automatically when the object is persisted or saved.
    public PetProfile(String name, String breed, double age, double weight, Date birthdate,
               ArrayList<String> medication, ArrayList<String> allergy, String microchip, ArrayList<String> diagnoses, PetType petType) {
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


    //public getters & setters
    //Refresher: Setter methods are used to set the value of a field/property in an object
    //If a field is not meant to be changed once it is set, omit the setter
    //No setter for name, breed, birthdate, microchip, or petId (petId will be auto-generated)
    public String getName() {
        return name;
    }

    public String getBreed() {
        return breed;
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

    public ArrayList<String> getMedication() {
        return medication;
    }

    public void setMedication(ArrayList<String> medication) {
        this.medication = medication;
    }

    public ArrayList<String> getAllergy() {
        return allergy;
    }

    public void setAllergy(ArrayList<String> allergy) {
        this.allergy = allergy;
    }

    public String getMicrochip() {
        return microchip;
    }

    public ArrayList<String> getDiagnoses() {
        return diagnoses;
    }

    public void setDiagnoses(ArrayList<String> diagnoses) {
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
