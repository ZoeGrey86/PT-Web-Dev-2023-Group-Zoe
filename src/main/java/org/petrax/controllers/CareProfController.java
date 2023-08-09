package org.petrax.controllers;

import org.petrax.data.CareProfRepository;
import org.petrax.exceptions.ResourceNotFoundException;
import org.petrax.models.CareProfessional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/professionals")
public class CareProfController {

    @Autowired
    CareProfRepository careProfRepository;

    @GetMapping("/list")
    public List<CareProfessional> getAllProfessionals() {
        return (List<CareProfessional>) careProfRepository.findAll();
    }

    //create care prof call
    @PostMapping("/add")
    public CareProfessional createNewCareProfessional (@RequestBody CareProfessional newCareProfessional){
        return careProfRepository.save(newCareProfessional);
    }

    //get by ID
    @GetMapping("/{id}")
    public ResponseEntity<CareProfessional> getProfessionalById(@PathVariable int id) {
        CareProfessional careProfessional = careProfRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("This professional does not exist"));
        return ResponseEntity.ok(careProfessional);
    }

    //update professional api
    @PutMapping("/{id}")
    public ResponseEntity<CareProfessional> updateCareProfessional(@PathVariable int id, @RequestBody CareProfessional careProfessionalUpdate){
        CareProfessional careProfessional = careProfRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("This professional does not exist"));
        careProfessional.setCareType(careProfessionalUpdate.getCareType());
        careProfessional.setBusinessName(careProfessional.getBusinessName());
        careProfessional.setName(careProfessionalUpdate.getName());
        careProfessional.setWebsite(careProfessionalUpdate.getWebsite());
        careProfessional.setPhoneNumber(careProfessionalUpdate.getPhoneNumber());

        CareProfessional updatedProfessional = careProfRepository.save(careProfessional);
        return ResponseEntity.ok(updatedProfessional);
    }

//    @GetMapping
//    public String displayAllProfessionals (Model model) {
//        model.addAttribute("title", "My Care Professionals");
//        model.addAttribute("professionals", careProfRepository.findAll());
//        return "professionals/index";
//    }
//
//    @GetMapping("add")
//    public String displayAddProfessionalsForm (Model model){
//        model.addAttribute("professional", new CareProfessional());
//        return "professionals/add";
//    }
//    @PostMapping("add")
//    public String processAddProfessionalsForm (@ModelAttribute @Valid CareProfessional newProfessional, Errors errors, Model model){
//        if(errors.hasErrors()) {
//            System.out.println("error found");
//            model.addAttribute("title", "Add New Professional");
//            model.addAttribute(new CareProfessional());
//            return "professionals/add";
//        }
//        careProfRepository.save(newProfessional);
//        return "redirect:";
//    }

//    @GetMapping("delete")
//    public String displayDeleteEventForm(Model model) {
//        model.addAttribute("title", "Delete Events");
//        model.addAttribute("professionals", careProfRepository.findAll());
//        return "professionals/delete";
//    }
//
//    @PostMapping("delete")
//    public String processDeleteEventsForm(@RequestParam(required = false) int[] professionalIds) {
//
//        if (professionalIds != null) {
//            for (int id : professionalIds) {
//                careProfRepository.deleteById(id);
//            }
//        }
//
//        return "redirect:";
//    }
}
