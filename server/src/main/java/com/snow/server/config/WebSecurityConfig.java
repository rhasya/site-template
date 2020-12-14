package com.snow.server.config;

import java.util.Arrays;

import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import static org.springframework.security.config.Customizer.withDefaults;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .cors(withDefaults())
            .authorizeRequests(h -> {
                h.antMatchers("/api/**").authenticated()
                    .anyRequest().permitAll();
            })
            .exceptionHandling(h -> {
                h.authenticationEntryPoint((req, res, e) -> { 
                    res.sendError(HttpServletResponse.SC_FORBIDDEN, e.getMessage());
                });
            })
            .headers(h -> {
                h.frameOptions().sameOrigin();
            })
            .formLogin(h -> {
                h.loginPage("/login")
                    .successHandler((req, res, e) -> {})
                    .failureHandler((req, res, e) -> {
                        res.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, e.getMessage());
                    })
                    .usernameParameter("username")
                    .passwordParameter("password");
            })
            .logout(h -> {
                h.logoutSuccessHandler((req, res, e) -> {});
            });
    }

    @Bean
    protected CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH", "HEAD", "OPTION", "DELETE"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }

    @Bean
    protected UserDetailsService userDetailsService() {
        UserDetails admin = User.withUsername("admin").password("{noop}admin").roles("USER").build();
        return new InMemoryUserDetailsManager(admin);
    }
}
