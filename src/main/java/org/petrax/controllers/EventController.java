package org.petrax.controllers;

import org.petrax.data.EventRepository;
import org.petrax.models.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/events")
@CrossOrigin(origins = "http://localhost:4200")
public class EventController {
    private final EventRepository eventRepository;

    @Autowired
    public EventController(EventRepository eventRepository){
        this.eventRepository=eventRepository;
    }

    @GetMapping("/displayEvents")
    public List<Event> getAllEvents(){
        return (List<Event>) eventRepository.findAll();
    }
}
