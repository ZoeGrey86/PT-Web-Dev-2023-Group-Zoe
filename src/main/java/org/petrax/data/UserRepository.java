package org.petrax.data;

import org.petrax.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    User findByContactEmail(String contactEmail);
}
