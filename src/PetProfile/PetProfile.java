package src.PetProfile;
import java.util.Date;
import java.util.HashMap;
import java.util.Scanner;
public class PetProfile {

    //fields petId, name, breed, age, weight, birthday, medications, allergies, microchip number, and diagnoses
    public static int petId = 1;
    public String name;
    public String breed;
    public double age;
    public double weight;
    public Date birthdate;
    public String medication;
    public String allergy;
    public double microchip;
    public String diagnoses;

    //constructors
    private PetProfile(int petId, String name, String breed, double age, double weight, Date birthdate, String medication, String allergy, double microchip, String diagnoses){
        petProfiles.put(petId, this);
        this.name =name;
        this.breed =breed;
        this.age =age;
        this.weight =weight;
        this.birthdate =birthdate;
        this.medication =medication;
        this.allergy =allergy;
        this.microchip =microchip;
        this.diagnoses =diagnoses;
}


    //psvm method that uses Scanner to ask user for pet name, not sure we'll use/need this
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in); //input variable of type Scanner
        System.out.println("Hello, what is your pet's name?"); //question asked of user
        String name = input.nextLine(); //variable to store user response using Scanner's .nextLine() method
        System.out.println("Hello " + name); //concatenation to print greeting
    }

    //toString method, do I need this?
    @Override
    public String toString() {
        return "PetProfile{" +
                "name='" + name + '\'' +
                ", breed='" + breed + '\'' +
                ", age=" + age +
                ", weight=" + weight +
                ", birthdate=" + birthdate +
                ", medication='" + medication + '\'' +
                ", allergy='" + allergy + '\'' +
                ", microchip=" + microchip +
                ", diagnoses='" + diagnoses + '\'' +
                '}';
    }

    //hashmap method
    private static HashMap<Integer, PetProfile> petProfiles = new HashMap<>();


    //getters & setters

    public static int getPetId() {
        return petId;
    }

    public static void setPetId(int petId) {
        PetProfile.petId = petId;
    }

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

    public double getMicrochip() {
        return microchip;
    }

    public void setMicrochip(double microchip) {
        this.microchip = microchip;
    }

    public String getDiagnoses() {
        return diagnoses;
    }

    public void setDiagnoses(String diagnoses) {
        this.diagnoses = diagnoses;
    }
}
