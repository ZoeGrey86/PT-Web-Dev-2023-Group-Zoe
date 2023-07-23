package org.petrax.data;

import org.petrax.models.CareProfessional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CareProfRepository extends CrudRepository<CareProfessional, Integer> {
}
