package org.petrax.controllers;

import org.petrax.data.CareProfRepository;
import org.petrax.models.CareProfessional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@Controller
@RequestMapping("professionals")
public class CareProfController {

    @Autowired
    CareProfRepository careProfRepository;

    @GetMapping
    public String displayAllProfessionals (Model model) {
        model.addAttribute("title", "Care Professionals");
        model.addAttribute("professionals", careProfRepository.findAll());
        return "professionals/index";
    }

    @GetMapping("add")
    public String displayAddProfessionalsForm (Model model){
        model.addAttribute("professional", new CareProfessional());
        return "professionals/add";
    }
    @PostMapping("add")
    public String processAddProfessionalsForm (@ModelAttribute @Valid CareProfessional newProfessional, Model model){
        careProfRepository.save(newProfessional);
        return "redirect:";
    }
}
