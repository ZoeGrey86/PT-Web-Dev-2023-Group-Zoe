package org.petrax.data;
import org.petrax.models.PetType;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;


//Refresher: the @Repository annotation tells SB it's a class we want available in other parts of app
//A repository in Java is a part of the code that handles data storage and retrieval
//Extends CrudRepository so we can perform CRUD operations on data
@Repository
public interface PetTypeRepository extends CrudRepository<PetType, Integer> {
}


