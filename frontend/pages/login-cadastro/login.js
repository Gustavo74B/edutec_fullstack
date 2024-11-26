import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        
        String email = request.getParameter("email");
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // Aqui você pode adicionar sua lógica de autenticação
        // Por exemplo, verificar se o usuário e a senha estão corretos

        if ("usuario@example.com".equals(email) && "usuario".equals(username) && "senha123".equals(password)) {
            response.getWriter().println("Login bem-sucedido! Bem-vindo, " + username + "!");
        } else {
            response.getWriter().println("Nome de usuário, e-mail ou senha incorretos.");
        }
    }
}