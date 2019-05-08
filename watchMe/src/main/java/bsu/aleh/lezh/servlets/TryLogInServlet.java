package bsu.aleh.lezh.servlets;

import bsu.aleh.lezh.classes.User;
import org.json.JSONObject;
import org.json.simple.JsonObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;



@WebServlet("/tryLogIn")
public class TryLogInServlet extends HttpServlet {

    @Override
    public void init() throws ServletException {
        super.init();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try{
            JSONObject user = new JSONObject(req.getReader().readLine());
            String username = user.getString("username");
            String password = user.getString("password");
            resp.setContentType("plain/text");
            resp.setCharacterEncoding("UTF-8");
            if(User.isRegistered(username) && User.isCorrectPassword(username, password)) {
                resp.getWriter().print("success");
            } else {
                resp.getWriter().print("Incorrect username or password");
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
