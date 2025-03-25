import java.util.HashMap;
import java.util.Scanner;

public class AdvancedLoginSystem {
    public static void main(String[] args) {
        HashMap<String, String> userDatabase = new HashMap<>();
        Scanner scanner = new Scanner(System.in);

        boolean running = true;

        while (running) {
            System.out.println("\n===== Login System =====");
            System.out.println("1. Register");
            System.out.println("2. Login");
            System.out.println("3. Exit");
            System.out.print("Choose an option: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            switch (choice) {
                case 1:
                    // Registration
                    System.out.print("Enter new username: ");
                    String newUsername = scanner.nextLine();

                    if (userDatabase.containsKey(newUsername)) {
                        System.out.println("Username already exists. Please try another.");
                    } else {
                        System.out.print("Enter new password: ");
                        String newPassword = scanner.nextLine();
                        userDatabase.put(newUsername, newPassword);
                        System.out.println("Registration successful!");
                    }
                    break;

                case 2:
                    // Login
                    System.out.print("Enter username: ");
                    String enteredUsername = scanner.nextLine();
                    System.out.print("Enter password: ");
                    String enteredPassword = scanner.nextLine();

                    if (userDatabase.containsKey(enteredUsername) &&
                        userDatabase.get(enteredUsername).equals(enteredPassword)) {
                        System.out.println("Login successful! Welcome, " + enteredUsername + ".");
                    } else {
                        System.out.println("Invalid username or password.");
                    }
                    break;

                case 3:
                    // Exit
                    running = false;
                    System.out.println("Exiting the program. Goodbye!");
                    break;

                default:
                    System.out.println("Invalid option. Please try again.");
            }
        }

        scanner.close();
    }
}