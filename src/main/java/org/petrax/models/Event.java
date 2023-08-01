package org.petrax.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class Event {
    @Id
    @GeneratedValue
    private String id;
    @NotBlank(message = "This is a required field")
    @Size(min=3, max=50, message = "Event title must be between 3 and 50 characters")
    private String title;

    //date needs to be ISO8601 format-- must be string in model.
    @NotBlank(message = "This is a required field")
    private String start;
    @NotBlank(message = "This is a required field")
    private String end;
    @Size(min=0, max=100)
    private String description;

    public Event () {}

    public Event(String title, String start, String end, String description) {
        this.title=title;
        this.start=start;
        this.end=end;
        this.description=description;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
