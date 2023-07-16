package org.petrax.data;

import org.petrax.models.CalendarEvent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CalendarEventRepository extends CrudRepository<CalendarEvent, Integer> {
}
