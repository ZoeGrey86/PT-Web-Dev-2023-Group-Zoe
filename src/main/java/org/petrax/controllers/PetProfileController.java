package org.petrax.controllers;
import org.petrax.data.PetProfileRepository;
import org.petrax.models.PetProfile;
import org.petrax.models.PetType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@Controller
@RequestMapping("petProfile")
public class PetProfileController {

    private final PetProfileRepository petProfileRepository;

    //Refresher: @Autowired annotation specifies that SB should auto-populate this field.
    //This is a dependency injection, what happens is the Autowired code tells SB we need a PetProfileRepository object
    @Autowired
    public PetProfileController(PetProfileRepository petProfileRepository) {this.petProfileRepository = petProfileRepository;}


    @GetMapping
    public String displayAllPets(Model model) {
        model.addAttribute("title", "All Pets");
        model.addAttribute("pets", petProfileRepository.findAll());
        return "petProfile/index";
    }

    @GetMapping("addNewPet")
    public String displayAddNewPetForm(Model model) {
        model.addAttribute("title", "Add New Pet");
        model.addAttribute(new PetProfile());
//        model.addAttribute("petProfile", petProfileRepository.findAll());
        return "petProfile/addNewPet";
    }

    @PostMapping("/addNewPet")
    public String processAddNewPetForm(@ModelAttribute @Valid PetProfile newPet,
                                       @RequestParam String petType,
                                       Errors errors, Model model) {
        if (errors.hasErrors()) {
            model.addAttribute("title", "Add New Pet");
            return "petProfile/addNewPet";
        }

        newPet.setPetType(PetType.valueOf(petType.toUpperCase()));
        petProfileRepository.save(newPet);
        return "redirect:/petProfile/addNewPetSuccess";
    }


    @GetMapping("addNewPetSuccess")
    public String showSuccessPage(Model model) {
        model.addAttribute("title", "New Pet Added");
        return "petProfile/addNewPetSuccess";
    }

    @GetMapping("deletePet")
    public String displayDeletePetForm(Model model) {
        model.addAttribute("title", "Delete Pet");
        model.addAttribute("pets", petProfileRepository.findAll());
        return "petProfile/deletePet";
    }

    @PostMapping("deletePet")
    public String processDeletePetForm(@RequestParam(required = false) int[] petId) {
        if (petId != null) {
            for (int id : petId) {
                petProfileRepository.deleteById(id);
            }
        }
        return "redirect:";
    }

//    @GetMapping("detail")
//    public String displayPetDetails(@RequestParam Integer petId, Model model) {
//
//        Optional<PetProfile> result = petProfileRepository.findById(petId);
//
//        if (result.isEmpty()) {
//            model.addAttribute("title", "Invalid Pet ID: " + petId);
//        } else {
//            PetProfile petProfile = result.get();
//            model.addAttribute("title", petProfile.getName() + " Details");
//            model.addAttribute("title", petProfile);
//        }
//
//        return "petProfile/detail";
//    }

}