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
@RequestMapping("petProfile")
public class PetProfileController {

    @Autowired
    public PetProfileRepository petProfileRepository;

    @GetMapping
    public String displayAllPetProfiles(Model model) {
        model.addAttribute("profile", "All Pet Profiles");
        model.addAttribute("petProfiles", petProfileRepository.findAll());
        return "index";
    }

    @GetMapping("addNewPet")
    public String displayAddNewPetForm(@RequestParam Integer petId, Model model) {
        Optional<PetProfile> result = petProfileRepository.findById(petId);
        PetProfile petProfile = result.get();
        model.addAttribute("add", "Add New Pet");
        model.addAttribute("pets", petProfileRepository.findAll());
        PetProfileDTO pet = new PetProfileDTO();
        model.addAttribute("pet", pet);
        return "petProfile/addNewPet";
    }

    @PostMapping("/addNewPet")
    public String processAddNewPetForm(@ModelAttribute @Valid PetProfile newPet, Errors errors, Model model) {
        if (errors.hasErrors()) {
            model.addAttribute("add", "Add New Pet");
            return "petProfile/addNewPet";
        }
        petProfileRepository.save(newPet);
        return "redirect:/petProfile/addNewPetSuccess";
    }

    @GetMapping("/petProfile/addNewPetSuccess")
    @ResponseBody
    public String showAddNewPetSuccessPage() {
        return "petProfile/addNewPetSuccess";
    }
}
