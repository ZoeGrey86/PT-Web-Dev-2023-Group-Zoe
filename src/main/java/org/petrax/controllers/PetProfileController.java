package org.petrax.controllers;
import org.petrax.models.PetProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import java.beans.PropertyEditorSupport;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import org.petrax.service.PetProfileService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.List;
import java.util.Optional;




@RestController
@RequestMapping("/api/petProfile")
public class PetProfileController {

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        binder.registerCustomEditor(LocalDate.class, new PropertyEditorSupport() {
            @Override
            public void setAsText(String text) throws IllegalArgumentException {
                setValue(LocalDate.parse(text, DateTimeFormatter.ofPattern("yyyy-MM-dd")));
            }
        });
    }

    private final PetProfileService petProfileService;   // Use the service instead of the repository directly

    @Autowired
    public PetProfileController(PetProfileService petProfileService) {  // Constructor injection for service
        this.petProfileService = petProfileService;
    }


    @GetMapping
    public List<PetProfile> getAllPets() {
        return petProfileService.getAllPets();  // Utilize the service method here
    }

    @GetMapping("/{petId}")
    public ResponseEntity<PetProfile> getPetById(@PathVariable int petId) {
        Optional<PetProfile> pet = petProfileService.getPetById(petId);  // Utilize the service method here
        return pet.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<PetProfile> addPet(@RequestBody PetProfile pet) {
        PetProfile savedPet = petProfileService.addPet(pet);   // Utilize the service method here
        return new ResponseEntity<>(savedPet, HttpStatus.CREATED);
    }

    @PutMapping("/{petId}")
    public ResponseEntity<PetProfile> updatePet(@PathVariable int petId, @RequestBody PetProfile updatedPet) {
        Optional<PetProfile> pet = petProfileService.updatePet(petId, updatedPet);  // Utilize the service method here
        return pet.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }


    @DeleteMapping("/{petId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePet(@PathVariable int petId) {
        petProfileService.deletePet(petId);  // Utilize the service method here
    }


}


