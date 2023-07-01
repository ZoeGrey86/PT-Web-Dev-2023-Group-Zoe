import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.net.URI;

import static org.junit.Assert.assertEquals;
@RunWith(SpringRunner.class)

@SpringBootTest
public class PETraxTests {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    public PETraxTests() {
    }


    @Test
    public void testHelloWorldEndpoint() throws Exception {
        URI uri = new URI("http://localhost:" + port + "/hello");

        ResponseEntity<String> response = restTemplate.getForEntity(uri, String.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Hello World", response.getBody());
    }
}