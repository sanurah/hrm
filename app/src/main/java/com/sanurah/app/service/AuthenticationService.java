package com.sanurah.app.service;

import com.sanurah.app.config.Role;
import com.sanurah.app.dao.User;
import com.sanurah.app.dto.AuthenticationRequest;
import com.sanurah.app.dto.AuthenticationResponse;
import com.sanurah.app.dto.RegisterRequest;
import com.sanurah.app.repository.UserRepository;
import jakarta.persistence.EntityExistsException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(UserRepository userRepository, PasswordEncoder passwordEncoder,
            JwtService jwtService, AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }

    public AuthenticationResponse register(RegisterRequest request) {

        if (userRepository.findUserByUsername(request.getUsername()).isPresent()) {
            throw new EntityExistsException("User with username: " + request.getUsername() + " exists.");
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setEnabled(true);
        user.setAccountNonExpired(true);
        user.setAccountNonLocked(true);
        user.setCredentialsNonExpired(true);
        user.setRole(Role.ADMIN);

        UserDetails userDetails = userRepository.save(user);

        String jwt = jwtService.generateToken(userDetails);

        return new AuthenticationResponse(jwt);
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        User user = userRepository.findUserByUsername(request.getUsername()).orElseThrow();
        String jwt = jwtService.generateToken(user);
        return new AuthenticationResponse(jwt);
    }
}
