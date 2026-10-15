package com.joselp.practJava.controllers;

import com.joselp.practJava.entity.User;
import com.joselp.practJava.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/v1/users")
public class UserController {

    private final UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    @PostMapping("/sync")
    public ResponseEntity<User> syncUser(
            @RequestParam String externalId,
            @RequestParam String email,
            @RequestParam String username) {

        Optional<User> existingUser =
                repository.findByExternalId(externalId);

        if (existingUser.isPresent()) {
            return ResponseEntity.ok(existingUser.get());
        }

        User newUser = new User();
        newUser.setExternalId(externalId);
        newUser.setEmail(email);
        newUser.setUsername(username);

        User savedUser = repository.save(newUser);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }
}
