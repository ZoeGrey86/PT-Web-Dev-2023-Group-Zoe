
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.petrax.PETrax;
import org.springframework.boot.test.context.SpringBootTest;


import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

import static org.junit.jupiter.api.Assertions.assertEquals;


@SpringBootTest(classes = PETrax.class)
public class PETraxTests {

    private final ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
    private final PrintStream originalOut = System.out;

    @BeforeEach
    public void setUpStreams() {
        System.setOut(new PrintStream(outputStream));
    }

    @AfterEach
    public void restoreStreams() {
        System.setOut(originalOut);
    }

    @Test
    public void testProgramExecution() {
        // Arrange (Setup any necessary test data or environment)
        String expectedOutputStart = "Starting PETrax application...";
        String expectedOutputEnd = "PETrax application started successfully.";

        // Act (Execute the main method or the relevant part of your program)
        PETrax.main(new String[0]);

        // Assert (Verify the expected outcome or behavior)
        String consoleOutput = getConsoleOutput();
        String firstLine = getFirstLine(consoleOutput);
        String lastLine = getLastLine(consoleOutput);

        assertEquals(expectedOutputStart, firstLine.trim());
        assertEquals(expectedOutputEnd, lastLine.trim());
    }

    private String getConsoleOutput() {
        return outputStream.toString().trim();
    }
    private String getFirstLine(String output) {
        if (output.contains("\n")) {
            return output.substring(0, output.indexOf("\n"));
        }
        return output;
    }

    private String getLastLine(String output) {
        if (output.contains("\n")) {
            return output.substring(output.lastIndexOf("\n") + 1);
        }
        return output;
    }
}