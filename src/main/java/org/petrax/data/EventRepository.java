package org.petrax.data;

import org.petrax.models.Event;
import org.springframework.data.repository.CrudRepository;

public interface EventRepository extends CrudRepository <Event, Integer> {
}
