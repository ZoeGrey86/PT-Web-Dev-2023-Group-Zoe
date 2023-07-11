package org.petrax.data;
import org.petrax.models.PetProfile;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


    //Refresher: the @Repository annotation tells SB it's a class we want available in other parts of app
    @Repository
    public interface PetProfileRepository extends CrudRepository<PetProfile, Integer> {
    }


