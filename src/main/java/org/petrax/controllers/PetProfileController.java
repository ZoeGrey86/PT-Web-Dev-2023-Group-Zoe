package org.petrax.controllers;

import org.petrax.data.PetProfileRepository;
import org.petrax.models.PetProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.beans.PropertyEditorSupport;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Optional;



@Controller
// Map all requests to /petProfile
@RequestMapping("petProfile")
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
    //Refresher: @Autowired annotation specifies that SB should auto-populate this field.
    //This is a dependency injection, what happens is the Autowired code tells SB we need a PetProfileRepository object
    @Autowired
    PetProfileRepository petProfileRepository;

    @GetMapping
    public String displayPetIndex(){return "petProfile/index";}

    @GetMapping("addNewPet")
    public String displayAddNewPetForm(Model model) {
        model.addAttribute("Add New Pet", "Add New Pet");
        return "petProfile/addNewPet";
    }

    @GetMapping("addNewPetSuccess")
    public String showSuccessPage(Model model) {
        model.addAttribute("New Pet Added", "New Pet Added");
        model.addAttribute(new PetProfile());
        return "petProfile/addNewPetSuccess"; //do I need .html at the end?
    }

    @PostMapping("/addNewPet")
    public String processAddNewPetForm(@ModelAttribute @Valid PetProfile newPet,
                                       Errors errors,
                                       Model model) {

        LocalDate birthdateLocalDate = newPet.getBirthdate();

        // Set the birthdate of newPet to the LocalDate value
        newPet.setBirthdate(birthdateLocalDate);
        // Check if there are any validation errors
        if (errors.hasErrors()) {
            // If there are errors, display the form again with error messages
            model.addAttribute("Add New Pet", "Add New Pet");
            return "petProfile/addNewPet"; // Return the addNewPet view to show the form again
        }
        // Save the newPet object to the database using the petProfileRepository
        petProfileRepository.save(newPet);
        // Redirect to the success page
        return "redirect:addNewPetSuccess"; //do I need .html at the end?
    }

    //Method to display the form for uploading a profile picture
//    @GetMapping("/{petId}/upload")
//    public String displayUploadForm(@PathVariable int petId, Model model) {
//        Optional<PetProfile> result = petProfileRepository.findById(petId);
//
//        if (result.isEmpty()) {
//            model.addAttribute("Invalid Pet ID", "Invalid Pet ID: " + petId);
//            return "petProfile/error"; // Create an "error" template to handle invalid pet IDs
//        } else {
//            PetProfile petProfile = result.get();
//            model.addAttribute("Upload Profile Picture", "Upload Profile Picture for " + petProfile.getName());
//            model.addAttribute("petProfile", petProfile);
//            return "petProfile/upload_form";
//        }
//    }
//
//    //Method to handle the image upload
//    @PostMapping("/{petId}/upload")
//    public String handleImageUpload(@PathVariable int petId, @RequestParam("imageFile") MultipartFile imageFile, RedirectAttributes redirectAttributes) {
//        if (!imageFile.isEmpty()) {
//            try {
//                // Perform validation on the image file (size, format, etc.) before saving to the database
//                imageFile.getSize(); //gets size
//                // Convert the image data to a byte array
//                byte[] imageBytes = imageFile.getBytes();
//
//                // Save the image data to the pet profile using the petId
//                Optional<PetProfile> result = petProfileRepository.findById(petId);
//                if (result.isPresent()) {
//                    PetProfile petProfile = result.get();
//                    petProfile.setPetPic(imageBytes);
//                    petProfileRepository.save(petProfile);
//                }
//
//                // Redirect to the pet profile page after successful upload
//                redirectAttributes.addFlashAttribute("successMessage", "Image uploaded successfully!");
//                return "redirect:/petProfile/detail?petId=" + petId;
////            } catch (IOException e) {
////                e.printStackTrace();
//            } catch (IOException e) {
//                throw new RuntimeException(e);
//            }
//        } else {
//            redirectAttributes.addFlashAttribute("errorMessage", "Please select an image to upload.");
//        }
//
//        // If there's an error, redirect back to the upload form
//        return "redirect:/petProfile/" + petId + "/upload";
//    }


//----------------------------------------------------------------------------------------------

    @GetMapping("deletePetSuccess")
    public String showDeletePage(Model model) {
        model.addAttribute("Pet Deleted", "Pet Deleted");
        return "petProfile/deletePetSuccess";
    }

    @GetMapping("deletePet")
    public String displayDeletePetForm(Model model) {
        model.addAttribute("Delete Pet", "Delete Pet");
        model.addAttribute("Name", petProfileRepository.findAll());
        model.addAttribute("Birthdate", petProfileRepository.findAll());
        return "petProfile/deletePet";
    }

    @PostMapping("deletePet")
    public String processDeletePetForm(@RequestParam(required = false) String name,
                                       @RequestParam(required = false) String birthdate) {
        if (name != null && birthdate != null) {
            PetProfile petToDelete = petProfileRepository.findFirstByNameAndBirthdate(name, birthdate);
            if (petToDelete != null) {
                petProfileRepository.delete(petToDelete);
            }
        }
        return "redirect:/petProfile/deletePetSuccess";
    }





    //html not set up yet
//    @GetMapping("detail")
//    public String displayPetDetails(@RequestParam Integer petId, Model model) {
//
//        Optional<PetProfile> result = petProfileRepository.findById(petId);
//
//        if (result.isEmpty()) {
//            model.addAttribute("Invalid Pet ID", "Invalid Pet ID: " + petId);
//        } else {
//            PetProfile petProfile = result.get();
//            model.addAttribute("Details", petProfile.getName() + " Details");
//            model.addAttribute("petProfile", petProfile);
//        }
//
//        return "petProfile/detail";
//    }

}

