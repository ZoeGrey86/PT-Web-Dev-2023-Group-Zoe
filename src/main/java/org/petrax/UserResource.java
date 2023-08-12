//package org.petrax;
//
//import org.petrax.data.UserRepository;
//import org.petrax.models.User;
//import org.petrax.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("/user")
//public class UserResource {
//    @Autowired
//    private UserRepository userRepository;
//    private final UserService userService;
//    public UserResource(UserService userService) {
//        this.userService = userService;
//    }
//
//    @GetMapping("")
//    public Iterable<User> getAllUsers() {
//        Iterable<User> users = userService.findAllUsers();
//        return userRepository.findAll();
////        return new ResponseEntity<>(users, HttpStatus.OK);
//    }
//}
