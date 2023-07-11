package org.petrax.data;
import org.petrax.models.PetProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

    @Repository
    public interface PetProfileRepository extends JpaRepository<PetProfile, Integer> {
    }


