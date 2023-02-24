package com.sanurah.auth.repository;

import com.sanurah.auth.dao.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
}
