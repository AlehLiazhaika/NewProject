package bsu.aleh.lezh.servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintStream;

@WebServlet("/logIn")
public class LogInServlet extends HttpServlet {

    private void changeMe(String username) {
        try(PrintStream ps = new PrintStream(new File("D:/project/watchMe/src/main/resources/dataBase/me.txt"))) {
            ps.print(username);
        } catch (FileNotFoundException e) {
            System.out.println(e);
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try{
            String username = req.getReader().readLine();
            changeMe(username);
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
