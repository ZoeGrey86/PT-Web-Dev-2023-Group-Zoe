package org.petrax.controllers;

import org.petrax.data.PetProfileRepository;
import org.petrax.models.PetProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@Controller
@RequestMapping("petProfile")
public class PetProfileController {

    @Autowired
    private PetProfileRepository petProfileRepository;

    @GetMapping("addnewpet")
    public String displayAddNewPetForm(Model model) {
        model.addAttribute("add", "Add New Pet");
        model.addAttribute("petProfile", new PetProfile());
        return "petProfile/addnewpet";
    }

    @PostMapping("addnewpet")
    public String processAddNewPetForm(@ModelAttribute("petProfile") @Valid PetProfile newPet,
                                       Errors errors, Model model) {
        if (errors.hasErrors()) {
            model.addAttribute("add", "Add New Pet");
            return "petProfile/addnewpet";
        }

        petProfileRepository.save(newPet);
        return "redirect:/petProfile/success";
    }

    @GetMapping("success")
    public String displaySuccessPage() {
        return "success";
    }




//
//    @GetMapping("deletepet")
//    public String displayDeletePetForm(Model model) {
//        model.addAttribute("delete", "Delete Pet");
//        model.addAttribute("pets", petProfileRepository.findAll());
//        return "petProfile/deletepet";
//    }
//
//    @PostMapping("deletepet")
//    public String processDeletePetForm(@RequestParam(required = false) int[] petId) {
//        if (petId != null) {
//            for (int id : petId) {
//                petProfileRepository.deleteById(id);
//            }
//        }
//        return "redirect:";
//    }
//
//    @GetMapping("detail")
//    public String displayPetDetails(@RequestParam Integer petId, Model model) {
//
//        Optional<PetProfile> result = petProfileRepository.findById(petId);
//
//        if (result.isEmpty()) {
//            model.addAttribute("pets", "Invalid Pet ID: " + petId);
//        } else {
//            PetProfile petProfile = result.get();
//            model.addAttribute("pets", petProfile.getName() + " Details");
//            model.addAttribute("pets", petProfile);
//        }
//
//        return "petProfile/detail";
//    }

} 
