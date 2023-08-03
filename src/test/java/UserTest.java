import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.petrax.models.User;

public class UserTest {

//    @Test
//    public void testUserConstructorAndGetters() {
//        // Create test data
//        String firstName = "John";
//        String lastName = "Doe";
//        String contactEmail = "john@example.com";
//        String username = "JohnD";
//        String address = "123 Main St";
//
//
//        // Create a User object using the constructor
//        User user = new User(firstName, lastName, contactEmail, username, address);
//        user.setAddress(address);
//
//        // Verify that the constructor sets the fields correctly
//        Assertions.assertEquals(firstName, user.getFirstName());
//        Assertions.assertEquals(lastName, user.getLastName());
//        Assertions.assertEquals(contactEmail, user.getContactEmail());
//        Assertions.assertEquals(username, user.getUsername());
//        Assertions.assertEquals(address, user.getAddress());
//    }

    @Test
    public void testUserSetters() {
        // Create a User object
        User user = new User();

        // Set values using the setters
        String firstName = "John";
        String lastName = "Doe";
        String contactEmail = "john@example.com";
        String username = "JohnD";
        String address = "123 Main St";

        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setContactEmail(contactEmail);
        user.setAddress(address);

        // Verify that the setters correctly update the fields
        Assertions.assertEquals(firstName, user.getFirstName());
        Assertions.assertEquals(lastName, user.getLastName());
        Assertions.assertEquals(contactEmail, user.getContactEmail());
        Assertions.assertEquals(address, user.getAddress());

    }
}
