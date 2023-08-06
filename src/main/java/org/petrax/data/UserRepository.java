package org.petrax.data;

import org.petrax.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.servlet.http.HttpSession;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    User findByContactEmail(String contactEmail);

    Optional<User> findById(HttpSession userId);
}
