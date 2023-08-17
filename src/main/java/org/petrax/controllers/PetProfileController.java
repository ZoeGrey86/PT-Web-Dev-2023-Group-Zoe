package org.petrax.controllers;

import org.petrax.models.PetProfile;
import org.petrax.models.User;
import org.petrax.service.PetProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.beans.PropertyEditorSupport;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/petProfile")
public class PetProfileController {

    @Autowired
    private AuthenticationController authenticationController;

    private final PetProfileService petProfileService;

    @Autowired
    public PetProfileController(PetProfileService petProfileService) {
        this.petProfileService = petProfileService;
    }

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        binder.registerCustomEditor(LocalDate.class, new PropertyEditorSupport() {
            @Override
            public void setAsText(String text) {
                setValue(LocalDate.parse(text, DateTimeFormatter.ofPattern("yyyy-MM-dd")));
            }
        });
    }

    @GetMapping
    public List<PetProfile> getAllPets() {
        return petProfileService.getAllPets();
    }

    @GetMapping("/{petId}")
    public ResponseEntity<PetProfile> getPetById(@PathVariable int petId) {
        Optional<PetProfile> pet = petProfileService.getPetById(petId);
        return pet.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<PetProfile> addPet(@RequestBody PetProfile pet, HttpSession session) {
        User currentUser = authenticationController.getUserFromSession(session);
        if(currentUser == null) {
            return ResponseEntity.status(401).body(null); // Unauthorized
        }

        Optional<PetProfile> savedPetOptional = petProfileService.addPet(pet, currentUser.getId());

        if (savedPetOptional.isPresent()) {
            return new ResponseEntity<>(savedPetOptional.get(), HttpStatus.CREATED);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }



    @PutMapping("/{petId}")
    public ResponseEntity<PetProfile> updatePet(@PathVariable int petId, @RequestBody PetProfile updatedPet) {
        Optional<PetProfile> pet = petProfileService.updatePet(petId, updatedPet);
        return pet.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{petId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteByPetId(@PathVariable int petId) {
        petProfileService.deleteByPetId(petId);
    }
}
