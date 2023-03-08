package com.sanurah.app.service;

import com.sanurah.app.dao.User;
import com.sanurah.app.repository.UserRepository;
import jakarta.persistence.EntityExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Unable to find user with username: " + username));
    }

    public User registerUser(User user) {
        try {
            UserDetails userDetails = loadUserByUsername(user.getUsername());
            throw new EntityExistsException("User with username: " + user.getUsername() + " exists.");
        } catch (UsernameNotFoundException e) {
            //TODO : add debug log
        }
        return userRepository.save(user);
    }
}
