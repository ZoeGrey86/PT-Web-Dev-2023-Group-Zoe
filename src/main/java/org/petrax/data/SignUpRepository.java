package org.petrax.data;

import org.petrax.models.SignUpRequest;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SignUpRepository extends CrudRepository<SignUpRequest, Integer>
{

}
