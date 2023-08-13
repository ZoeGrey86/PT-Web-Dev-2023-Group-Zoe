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

    /**
     * Fetches all events from the database.
     *
     * @return a list of all events
     */
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    /**
     * Fetches a specific event by its ID.
     *
     * @param id the ID of the event to be fetched
     * @return an Optional containing the event if found, or an empty Optional otherwise
     */
    public Optional<Event> getEventById(int id) {
        return eventRepository.findById(id);
    }

    /**
     * Adds a new event to the database. Adjusts the recurrence end date for recurring events.
     *
     * @param event the event to be added
     * @return the added event
     */
    public Event addEvent(Event event) {
        handleRecurrence(event);
        return eventRepository.save(event);
    }

    /**
     * Updates a specific event in the database. Adjusts the recurrence end date for recurring events.
     *
     * @param id the ID of the event to be updated
     * @param updatedEvent the event data for the update
     * @return an Optional containing the updated event if the original event was found and updated, or an empty Optional otherwise
     */
    public Optional<Event> updateEvent(int id, Event updatedEvent) {
        handleRecurrence(updatedEvent);
        Optional<Event> eventOptional = eventRepository.findById(id);
        if (eventOptional.isPresent()) {
            updatedEvent.setId(id);
            return Optional.of(eventRepository.save(updatedEvent));
        } else {
            return Optional.empty();
        }
    }

    /**
     * Deletes a specific event from the database.
     *
     * @param id the ID of the event to be deleted
     */
    public void deleteEvent(int id) {
        eventRepository.deleteById(id);
    }

    /**
     * Adjusts the recurrence end date of an event based on its recurrence rules.
     * This method is utilized before adding or updating the event in the database.
     *
     * @param event the event whose recurrence end date needs to be adjusted
     */
    private void handleRecurrence(Event event) {
        if (Boolean.TRUE.equals(event.getIsRecurring())) {
            switch (event.getRecurrenceEnd()) {
                case "2weeks":
                    event.setRecurrenceEndDate(event.getStart().plusWeeks(2));
                    break;
                case "4weeks":
                    event.setRecurrenceEndDate(event.getStart().plusWeeks(4));
                    break;
                case "6weeks":
                    event.setRecurrenceEndDate(event.getStart().plusWeeks(6));
                    break;
                // "date" option doesn't require an adjustment since frontend sets a specific date.
                // "never" option would mean that `recurrenceEndDate` remains null.
            }
        }
    }
}
