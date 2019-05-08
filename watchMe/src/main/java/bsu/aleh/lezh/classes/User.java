package bsu.aleh.lezh.classes;

import java.io.File;
import java.io.FileFilter;
import java.io.FilenameFilter;
import java.io.PrintStream;
import java.util.Scanner;

public class User {
    private String email;
    private String name;
    private String username;
    private String password;

    public User(String email, String name, String username, String password) {
        this.email = email;
        this.name = name;
        this.username = username;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void signUp() {
        String userPath = "D:/project/watchMe/src/main/resources/dataBase/users/" + username + ".txt";
        try (PrintStream ps = new PrintStream(new File(userPath))) {
            ps.println(email);
            ps.println(name);
            ps.println(username);
            ps.println(password);
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public static boolean isRegistered(String username) {
        String dataBasePath = "D:/project/watchMe/src/main/resources/dataBase/users";
        FilenameFilter ff = (File dir, String name) -> name.equals(username);
        return new File(dataBasePath).listFiles(ff) != null;
    }

    public static boolean isCorrectPassword(String username, String password) throws Exception {
        try {
            String userPath = "D:/project/watchMe/src/main/resources/dataBase/users/" + username + ".txt";
            File userFile = new File(userPath);
            try (Scanner sc = new Scanner(userFile)) {
                sc.nextLine();
                sc.nextLine();
                sc.nextLine();
                return sc.nextLine().equals(password);
            }
        } catch (Exception e) {
            throw new Exception("User not found");
        }
    }
}
