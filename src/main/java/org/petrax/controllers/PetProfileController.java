package org.petrax.controllers;
import org.petrax.data.PetProfileRepository;
import org.petrax.models.PetProfile;
import org.petrax.models.dto.PetProfileDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.Optional;

@Controller
// Map all requests to /petProfile
@RequestMapping("/petProfile")
public class PetProfileController {

    //Refresher: @Autowired annotation specifies that SB should auto-populate this field.
    //This is a dependency injection, what happens is the Autowired code tells SB we need a PetProfileRepository object
    @Autowired
    public PetProfileRepository petProfileRepository;

    @GetMapping("/addNewPet")
    public String displayAddNewPetForm(Model model) {
        model.addAttribute("Add New Pet", "Add New Pet");
        model.addAttribute("petProfileDTO", new PetProfileDTO()); // Create a new PetProfileDTO instance
        return "petProfile/addNewPet";
    }

    @GetMapping("/addNewPetSuccess")
    public String showSuccessPage(Model model) {
        model.addAttribute("New Pet Added", "New Pet Added");
        return "redirect:/addNewPetSuccess"; //do I need .html at the end?
    }

    @PostMapping("/addNewPet")
    public String processAddNewPetForm(@ModelAttribute @Valid PetProfileDTO petProfileDTO,
                                       Errors errors,
                                       Model model) {
        // Check if there are any validation errors
        if (errors.hasErrors()) {
            // If there are errors, display the form again with error messages
            model.addAttribute("Add New Pet", "Add New Pet");
            return "petProfile/addNewPet"; // Return the addNewPet view to show the form again
        }
        // If there are no errors, extract the PetProfile object from the PetProfileDTO
        PetProfile newPet = petProfileDTO.getPetProfile();
        // Save the newPet object to the database using the petProfileRepository
        petProfileRepository.save(newPet);
        // Redirect to the success page
        return "petProfile/addNewPetSuccess"; //do I need .html at the end?
    }


//----------------------------------------------------------------------------------------------


    //html not set up yet
    @GetMapping("deletePet")
    public String displayDeletePetForm(Model model) {
        model.addAttribute("Delete Pet", "Delete Pet");
        model.addAttribute("petProfile", petProfileRepository.findAll());
        return "petProfile/deletePet";
    }


    //html not set up yet
    @PostMapping("deletePet")
    public String processDeletePetForm(@RequestParam(required = false) int[] petId) {
        if (petId != null) {
            for (int id : petId) {
                petProfileRepository.deleteById(id);
            }
        }
        return "redirect:";
    }

    //html not set up yet
    @GetMapping("detail")
    public String displayPetDetails(@RequestParam Integer petId, Model model) {

        Optional<PetProfile> result = petProfileRepository.findById(petId);

        if (result.isEmpty()) {
            model.addAttribute("Invalid Pet ID", "Invalid Pet ID: " + petId);
        } else {
            PetProfile petProfile = result.get();
            model.addAttribute("Details", petProfile.getName() + " Details");
            model.addAttribute("petProfile", petProfile);
        }

        return "petProfile/detail";
    }

}
