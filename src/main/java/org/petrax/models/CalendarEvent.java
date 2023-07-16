package org.petrax.models;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.Objects;

public class CalendarEvent {
    @GeneratedValue
    @Id
    private int id;

    private int userId;
    //Many-to-One relationship with a user (one user may have many events)

    @NotBlank(message = "This field is required")
    @Size(min = 2, max = 50, message = "name must be between 2 and 50 characters")
    private String name;

    private String description;

    @NotBlank
    private Date time;
    //not sure how this will work-- need to see how front end works.


    public int getId() {
        return id;
    }

    public int getUserId() {
        return userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    //events are equal if they share an ID number
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CalendarEvent)) return false;
        CalendarEvent that = (CalendarEvent) o;
        return getId() == that.getId();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId());
    }

    @Override
    public String toString() {
        return "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", time=" + time;
    }
}
