package org.petrax.controllers;

import org.petrax.data.PetProfileRepository;
import org.petrax.models.PetProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.beans.PropertyEditorSupport;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/v1/petProfile")
@CrossOrigin(origins = "http://localhost:4200")
public class PetProfileController {

    @Autowired
    private PetProfileRepository petProfileRepository;

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        binder.registerCustomEditor(LocalDate.class, new PropertyEditorSupport() {
            @Override
            public void setAsText(String text) throws IllegalArgumentException {
                setValue(LocalDate.parse(text, DateTimeFormatter.ofPattern("yyyy-MM-dd")));
            }
        });
    }

    @GetMapping
    public List<PetProfile> getAllPetProfiles() {
        return (List<PetProfile>) petProfileRepository.findAll();
    }

    @GetMapping("addNewPet")
    public String displayAddNewPetForm(Model model) {
        model.addAttribute("title", "Add New Pet");
        return "petProfile/addNewPet";
    }

    @PostMapping("/addNewPet")
    public String processAddNewPetForm(@ModelAttribute @Valid PetProfile newPet,
                                       Errors errors,
                                       Model model) {

        if (errors.hasErrors()) {
            model.addAttribute("title", "Add New Pet");
            return "petProfile/addNewPet";
        }

        petProfileRepository.save(newPet);
        return "redirect:addNewPetSuccess";
    }

    @GetMapping("addNewPetSuccess")
    public String showAddNewPetSuccessPage(Model model) {
        model.addAttribute("title", "Pet Added Successfully");
        return "petProfile/addNewPetSuccess";
    }

    @GetMapping("deletePetSuccess")
    public String showDeletePage(Model model) {
        model.addAttribute("title", "Pet Deleted");
        return "petProfile/deletePetSuccess";
    }

    @GetMapping("deletePet")
    public String displayDeletePetForm(Model model) {
        model.addAttribute("title", "Delete Pet");
        model.addAttribute("pets", petProfileRepository.findAll());
        return "petProfile/deletePet";
    }

    @PostMapping("deletePet")
    public String processDeletePetForm(@RequestParam(required = false) int[] petIds) {
        if (petIds != null) {
            for (int id : petIds) {
                petProfileRepository.deleteById(id);
            }
        }
        return "redirect:deletePetSuccess";
    }
}
