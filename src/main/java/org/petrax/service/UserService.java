package org.petrax.service;

import org.petrax.data.UserRepository;
import org.petrax.exceptions.UserNotFoundException;
import org.petrax.models.User;
import org.petrax.models.dto.RegisterFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User createUser(RegisterFormDTO registerFormDTO) {
        User newUser = new User();
        newUser.setFirstName(registerFormDTO.getFirstName());
        newUser.setLastName(registerFormDTO.getLastName());
        newUser.setContactEmail(registerFormDTO.getContactEmail());
        newUser.setAddress(registerFormDTO.getAddress());

        // Encode and set password
        String encodedPassword = passwordEncoder.encode(registerFormDTO.getPassword());
        newUser.setPwHash(encodedPassword);

        return userRepository.save(newUser);
    }

    public boolean isMatchingPassword(User user, String password) {
        return passwordEncoder.matches(password, user.getPwHash());
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

//@Service
//public class UserService {
//    @Autowired
//    private UserRepository userRepository;
//    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//
//    public UserService(UserRepository userRepository){
//        this.userRepository = userRepository;
//    }
//
//    public User addUser(User user){
//        return  userRepository.save(user);
//    }
//
//    public Iterable<User> findAllUsers(){
//        return userRepository.findAll();
//    }
//
//    public User updateUser(User user){
//        return userRepository.save(user);
//    }
//
//    public User findUserById(int id){
//        return (User) userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
//    }
//
//    public void deleteUser (int id)    {
//        userRepository.deleteById(id);
//    }
//
//
//}
