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

    // The primary method to register or create new users.
    public User createUser(RegisterFormDTO registerFormDTO) {
        User newUser = new User();
        newUser.setFirstName(registerFormDTO.getFirstName());
        newUser.setLastName(registerFormDTO.getLastName());
        newUser.setContactEmail(registerFormDTO.getContactEmail());
        newUser.setAddress(registerFormDTO.getAddress());

        // Encode and set password
        String encodedPassword = passwordEncoder.encode(registerFormDTO.getPwHash());
        newUser.setPwHash(encodedPassword);

        return userRepository.save(newUser);
    }

    // Use this method to validate a user's password during login or other operations
    public boolean isMatchingPassword(User user, String password) {
        return passwordEncoder.matches(password, user.getPwHash());
    }

    // Removed the previous 'addUser' to avoid confusion and potential misuse.

    // For fetching all users
    public Iterable<User> findAllUsers(){
        return userRepository.findAll();
    }

    // For updating user details (ensure password hashing isn't done here)
    public User updateUser(User user){
        return userRepository.save(user);
    }

    // For finding a user by their ID
    public User findUserById(int id){
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    // For deleting a user
    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }
}