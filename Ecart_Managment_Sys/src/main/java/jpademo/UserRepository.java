package jpademo;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository  extends CrudRepository<User, Integer>{

}
