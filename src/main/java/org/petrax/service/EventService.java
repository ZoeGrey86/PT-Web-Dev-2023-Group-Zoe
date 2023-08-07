package org.petrax.service;

import org.petrax.models.Event;
import org.petrax.data.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    private final EventRepository eventRepository;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Optional<Event> getEventById(int id) {
        return eventRepository.findById(id);
    }

    public Event addEvent(Event event) {
        return eventRepository.save(event);
    }

    public Optional<Event> updateEvent(int id, Event updatedEvent) {
        Optional<Event> eventOptional = eventRepository.findById(id);
        if (eventOptional.isPresent()) {
            updatedEvent.setId(id);
            return Optional.of(eventRepository.save(updatedEvent));
        } else {
            return Optional.empty();
        }
    }

    public void deleteEvent(int id) {
        eventRepository.deleteById(id);
    }
}
