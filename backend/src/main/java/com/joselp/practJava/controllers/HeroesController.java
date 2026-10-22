package com.joselp.practJava.controllers;

import com.joselp.practJava.entity.Hero;
import com.joselp.practJava.entity.User;
import com.joselp.practJava.entity.UserHeroe;
import com.joselp.practJava.repository.HeroesRepository;
import com.joselp.practJava.repository.UserHeroeRepository;
import com.joselp.practJava.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/v1/heroes")
public class HeroesController {
    private HeroesRepository hr;
    private UserRepository ur;
    private UserHeroeRepository uhr;
    public HeroesController(HeroesRepository hr, UserRepository ur, UserHeroeRepository uhr){
            this.hr = hr;
            this.ur = ur;
            this.uhr = uhr;
    }

    @PostMapping("/")
    public ResponseEntity<UserHeroe> addHeroeToUser(@RequestParam Integer userId, @RequestParam Integer heroType ){
        UserHeroe uh = new UserHeroe();
        Optional<Hero> selectedHero = hr.findById(heroType);
        if (selectedHero.isPresent()){
            uh.setHeroeType(selectedHero.get());
        }
        Optional<User> selectedUser = ur.findById(userId);
        if (selectedUser.isPresent()){
            uh.setUser(selectedUser.get());
        }

        uh = uhr.save(uh);
        return ResponseEntity.status(HttpStatus.OK).body(uh);
    }

    @GetMapping("/types")
    public ResponseEntity<List<Hero>> getHeroesTypes(){
        ArrayList<Hero> result = (ArrayList<Hero>) this.hr.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}
