package org.petrax.models.dto;

import java.time.LocalDateTime;

public class EventDTO {
    private int id;
    private String title;
    private LocalDateTime start;
    private LocalDateTime end;
    private String description;
    private Boolean isRecurring;
    private String recurrenceEnd;
    private LocalDateTime recurrenceEndDate;

    // Constructors, getters, setters


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDateTime getStart() {
        return start;
    }

    public void setStart(LocalDateTime start) {
        this.start = start;
    }

    public LocalDateTime getEnd() {
        return end;
    }

    public void setEnd(LocalDateTime end) {
        this.end = end;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getRecurring() {
        return isRecurring;
    }

    public void setRecurring(Boolean recurring) {
        isRecurring = recurring;
    }

    public String getRecurrenceEnd() {
        return recurrenceEnd;
    }

    public void setRecurrenceEnd(String recurrenceEnd) {
        this.recurrenceEnd = recurrenceEnd;
    }

    public LocalDateTime getRecurrenceEndDate() {
        return recurrenceEndDate;
    }

    public void setRecurrenceEndDate(LocalDateTime recurrenceEndDate) {
        this.recurrenceEndDate = recurrenceEndDate;
    }
}
