package org.petrax.data;

import org.petrax.models.FileEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FileRepository extends CrudRepository<FileEntity, Long> {
}
