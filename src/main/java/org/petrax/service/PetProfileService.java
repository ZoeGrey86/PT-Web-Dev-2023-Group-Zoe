package org.petrax.service;

import org.petrax.data.PetProfileRepository;
import org.petrax.models.PetProfile;
import org.petrax.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PetProfileService {

    private final PetProfileRepository petProfileRepository;

    @Autowired
    private UserService userService;  // Use UserService instead of UserRepository

    @Autowired
    public PetProfileService(PetProfileRepository petProfileRepository) {
        this.petProfileRepository = petProfileRepository;
    }

    public List<PetProfile> getAllPets() {
        return (List<PetProfile>) petProfileRepository.findAll();
    }

    public Optional<PetProfile> getPetById(int petId) {
        return petProfileRepository.findById(petId);
    }

    public Optional<PetProfile> addPet(PetProfile pet, int userId) {
        User user = userService.findUserById(userId);  // Assuming UserService's findUserById returns an Optional<User>
        if (user != null) {
            pet.setUser(user);
            return Optional.of(petProfileRepository.save(pet));
        } else {
            return Optional.empty();  // Return empty if user not found
        }
    }

    public Optional<PetProfile> updatePet(int petId, PetProfile updatedPet) {
        if (petProfileRepository.existsById(petId)) {
            updatedPet.setPetId(petId);
            return Optional.of(petProfileRepository.save(updatedPet));
        } else {
            return Optional.empty();
        }
    }

    public void deleteByPetId(int petId) {
        petProfileRepository.deleteById(petId);  // Delete directly by id, handle exceptions at a higher level if necessary
    }
}
