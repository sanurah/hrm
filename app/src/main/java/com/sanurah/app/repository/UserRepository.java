package com.sanurah.app.repository;

import com.sanurah.app.dao.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findUserByUsername(String username);
}
