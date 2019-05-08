package bsu.aleh.lezh.servlets;

import bsu.aleh.lezh.classes.User;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;


@WebServlet("/trySignUp")
public class TrySignUpServlet extends HttpServlet {

    private Map<String, User> users;

    @Override
    public void init() throws ServletException {
        super.init();

        users = new HashMap<>();
        fillUsers();
    }

    private void fillUsers() {
        String[] files = new File("D:/project/watchMe/src/main/resources/dataBase/users").list();
        for (String file : files) {
            try (Scanner sc = new Scanner(new File("D:/project/watchMe/src/main/resources/dataBase/users/" + file))) {
                String email = sc.nextLine();
                String name = sc.nextLine();
                String username = sc.nextLine();
                String password = sc.nextLine();
                users.put(username, new User(email, name, username, password));
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    }

    private boolean checkEmailValid(String email) {
        String emailRegEx = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
        return email.matches(emailRegEx);
    }

    private boolean checkPasswordValid(String password) {
        String passwordRegEx = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$";
        return password.matches(passwordRegEx);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            JSONObject user = new JSONObject(req.getReader().readLine());
            String email = user.getString("email");
            String name = user.getString("name");
            String username = user.getString("username");
            String password = user.getString("password");
            resp.setContentType("plain/text");
            resp.setCharacterEncoding("UTF-8");
            if(users.get(username) == null) {
                resp.getWriter().print("This username is already used");
            } else if(!checkEmailValid(email)) {
                resp.getWriter().print("Incorrect email address");
            } else if(username.equals("")) {
                resp.getWriter().print("Username can't be empty");
            } else if(!checkPasswordValid(password)) {
                resp.getWriter().print("Minimum len of password eight characters, at least one letter and one number");
            } else {
                resp.getWriter().print("success");
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
