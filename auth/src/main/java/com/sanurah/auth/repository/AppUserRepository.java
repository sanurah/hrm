package com.sanurah.auth.repository;

import com.sanurah.auth.dao.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppUserRepository extends JpaRepository<AppUser, Long> {

}
