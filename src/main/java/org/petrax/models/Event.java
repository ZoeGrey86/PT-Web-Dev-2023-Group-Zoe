package org.petrax.models;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import org.petrax.util.CustomLocalDateTimeDeserializer;

@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    private LocalDateTime start;
    private LocalDateTime end;
    private String description;

    //Recurrence fields
    private Boolean isRecurring;  // True if the event is recurring, false otherwise
    private String recurrenceEnd;  // Could be "2weeks", "4weeks", "6weeks", "date", or "never"
    // Annotate the field with the custom deserializer
    @JsonDeserialize(using = CustomLocalDateTimeDeserializer.class)
    private LocalDateTime recurrenceEndDate;  // The end date for the recurrence, if applicable

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

    public Boolean getIsRecurring() {
        return isRecurring;
    }

    public void setIsRecurring(Boolean recurring) {
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

