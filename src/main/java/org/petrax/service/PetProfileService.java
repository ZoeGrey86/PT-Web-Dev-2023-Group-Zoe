package org.petrax.service;
import org.petrax.data.PetProfileRepository;
import org.petrax.models.PetProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class PetProfileService {

    private final PetProfileRepository petProfileRepository;

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

    public PetProfile addPet(PetProfile pet) {
        return petProfileRepository.save(pet);
    }

    public Optional<PetProfile> updatePet(int petId, PetProfile updatedPet) {
        Optional<PetProfile> petProfileOptional = petProfileRepository.findById(petId);
        if (petProfileOptional.isPresent()) {
            updatedPet.setPetId(petId);
            return Optional.of(petProfileRepository.save(updatedPet));
        } else {
            return Optional.empty();
        }
    }


    public Optional<Object> deleteByPetId(int petId) {
        Optional<PetProfile> petProfileOptional = petProfileRepository.findById(petId);
        if (petProfileOptional.isPresent()) {
            petProfileRepository.delete(petProfileOptional.get());
        } else {
            return Optional.empty();
        }
        return null;
    }



}

