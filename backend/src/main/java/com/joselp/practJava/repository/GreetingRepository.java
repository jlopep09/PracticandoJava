package com.joselp.practJava.repository;

import com.joselp.practJava.entity.Greeting;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GreetingRepository extends CrudRepository<Greeting, Integer> {
}