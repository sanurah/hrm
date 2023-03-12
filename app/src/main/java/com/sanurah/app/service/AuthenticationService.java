package com.sanurah.app.service;

import com.sanurah.app.config.Role;
import com.sanurah.app.dao.User;
import com.sanurah.app.dto.Authentication;
import com.sanurah.app.dto.JwtToken;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(UserService userService, PasswordEncoder passwordEncoder,
            JwtService jwtService, AuthenticationManager authenticationManager) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    public JwtToken register(Authentication request) {

        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setEnabled(true);
        user.setAccountNonExpired(true);
        user.setAccountNonLocked(true);
        user.setCredentialsNonExpired(true);
        user.setRole(Role.ADMIN);
        user = userService.registerUser(user);

        String jwt = jwtService.generateToken(user);
        return new JwtToken(jwt);
    }

    public JwtToken authenticate(Authentication request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        User user = userService.loadUserByUsername(request.getUsername());
        String jwt = jwtService.generateToken(user);
        return new JwtToken(jwt);
    }

    public boolean validateToken(JwtToken jwt) {
        String username = jwtService.extractUsername(jwt.getToken());
        User user = userService.loadUserByUsername(username);
        return jwtService.isTokenValid(jwt.getToken(), user);
    }
}
