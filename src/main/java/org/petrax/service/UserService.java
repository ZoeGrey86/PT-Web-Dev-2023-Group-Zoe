package org.petrax.service;

import org.petrax.data.UserRepository;
import org.petrax.exceptions.UserNotFoundException;
import org.petrax.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public User addUser(User user){
        return  userRepository.save(user);
    }

    public Iterable<User> findAllUsers(){
        return userRepository.findAll();
    }

    public User updateUser(User user){
        return userRepository.save(user);
    }

    public User findUserById(int id){
        return (User) userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public void deleteUser (int id)    {
        userRepository.deleteById(id);
    }


}
