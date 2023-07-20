package org.petrax.controllers;
import org.petrax.data.PetProfileRepository;
import org.petrax.models.PetProfile;
import org.petrax.models.PetType;
import org.petrax.models.dto.PetProfileDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@Controller
@RequestMapping("/petProfile")
public class PetProfileController {

    private final PetProfileRepository petProfileRepository;

    @Autowired
    public PetProfileController(PetProfileRepository petProfileRepository) {
        this.petProfileRepository = petProfileRepository;
    }

    @GetMapping("/addNewPet")
    public String displayAddNewPetForm(Model model) {
        model.addAttribute("title", "Add New Pet");
        model.addAttribute(new PetProfile());
        return "petProfile/addNewPet";
    }

    @GetMapping("/addNewPetSuccess")
    public String showSuccessPage(Model model) {
        model.addAttribute("title", "New Pet Added");
        return "petProfile/addNewPetSuccess.html";
    }
    @PostMapping("/addNewPet")
    public String processAddNewPetForm(@ModelAttribute @Valid PetProfile newPet, Errors errors,
                                       Model model) {
        if (errors.hasErrors()) {
            model.addAttribute("title", "Add New Pet");
            return "petProfile/addNewPet";
        }


        petProfileRepository.save(newPet);
        return "redirect:/petProfile/addNewPetSuccess.html"; // Redirect to the success page
    }




//@Controller
//@RequestMapping("petProfile")
//public class PetProfileController {
//
//    @Autowired
//    private final PetProfileRepository petProfileRepository;
//
//    //Refresher: @Autowired annotation specifies that SB should auto-populate this field.
//    //This is a dependency injection, what happens is the Autowired code tells SB we need a PetProfileRepository object
//
//    public PetProfileController(PetProfileRepository petProfileRepository) {this.petProfileRepository = petProfileRepository;}
//
//
//    @GetMapping
//    public String displayAllPets(Model model) {
//        model.addAttribute("title", "All Pets");
//        model.addAttribute("petProfile", petProfileRepository.findAll());
//        return "petProfile/index";
//    }
//
//    @GetMapping("addNewPet")
//    public String displayAddNewPetForm(Model model) {
//        model.addAttribute("title", "Add New Pet");
//        model.addAttribute(new PetProfile());
////        model.addAttribute("petProfile", petProfileRepository.findAll());
//        return "petProfile/addNewPet";
//    }
//
//
//    //THIS CODE ALLOWS FORM TO BE SUBMIT, STILL NOT ON SQL
//    @PostMapping("/addNewPet")
//    public String processAddNewPetForm(@ModelAttribute @Valid PetProfile newPet,
//                                       BindingResult result,
//                                       @RequestParam String petType,
//                                       Model model) {
//        if (result.hasErrors()) {
//            model.addAttribute("title", "Add New Pet");
//            return "petProfile/addNewPet";
//        }
//
//        newPet.setPetType(PetType.valueOf(petType.toUpperCase()));
//        petProfileRepository.save(newPet);
//        PetProfileDTO petProfileDTO = new PetProfileDTO();
//        petProfileDTO.setPetProfile(newPet);
//        model.addAttribute("petProfileDTO", petProfileDTO);
//        return "petProfile/addNewPetSuccess.html";
//    }
//
//    @GetMapping("/addNewPetSuccess")
//    public String showSuccessPage(Model model) {
//        model.addAttribute("title", "New Pet Added");
//        return "petProfile/addNewPetSuccess.html";
//    }

//    @PostMapping("/addNewPet")
//    public String processAddNewPetForm(@ModelAttribute @Valid PetProfile newPet,
//                                       @RequestParam String petType,
//                                       Errors errors, Model model) {
//        if (errors.hasErrors()) {
//            model.addAttribute("title", "Add New Pet");
//            return "petProfile/addNewPet";
//        }
//
//        newPet.setPetType(PetType.valueOf(petType.toUpperCase()));
//        petProfileRepository.save(newPet);
//        return "redirect:/addNewPetSuccess";
//    }


    @GetMapping("deletePet")
    public String displayDeletePetForm(Model model) {
        model.addAttribute("title", "Delete Pet");
        model.addAttribute("petProfile", petProfileRepository.findAll());
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