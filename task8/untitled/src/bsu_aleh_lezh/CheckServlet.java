package bsu_aleh_lezh;

import org.json.simple.JsonObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/check")
public class CheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try{
            JsonObject jo = new JsonObject();
            jo.put("name", "Aleh");
            jo.put("age", 19);
            resp.getOutputStream().println(jo.toJson());
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
