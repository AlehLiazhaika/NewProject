package bsu_aleh_lezh;


import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@WebFilter(urlPatterns  = {"/status", "/page", "/get", "/check", "/test1", "/test2"})
public class MyFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    private String getURI(ServletRequest servletRequest) {
        String uri = servletRequest.getScheme() + "://" +
                servletRequest.getServerName() +
                ("http".equals(servletRequest.getScheme()) && servletRequest.getServerPort() == 80 || "https".equals(servletRequest.getScheme()) && servletRequest.getServerPort() == 443 ? "" : ":" + servletRequest.getServerPort() ) +
                ((HttpServletRequest)servletRequest).getRequestURI() +
                (((HttpServletRequest)servletRequest).getQueryString() != null ? "?" + ((HttpServletRequest)servletRequest).getQueryString() : "");
        return uri;
    }

    private String getMethod(ServletRequest servletRequest) {
        return ((HttpServletRequest)servletRequest).getMethod();
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        System.out.print(getMethod(servletRequest) + " - ");
        System.out.print(getURI(servletRequest) + " - ");

        long time = System.currentTimeMillis();
        filterChain.doFilter(servletRequest, servletResponse);
        System.out.println(System.currentTimeMillis() - time + "ms");
    }

    @Override
    public void destroy() {
    }
}
