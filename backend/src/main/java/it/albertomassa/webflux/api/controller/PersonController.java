package it.albertomassa.webflux.api.controller;

import it.albertomassa.webflux.db.collection.Person;
import it.albertomassa.webflux.db.repository.PersonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import javax.annotation.PostConstruct;

@RequiredArgsConstructor

@RestController
public class PersonController {

    private final PersonRepository repository;

    @CrossOrigin(value = "*")
    @GetMapping(value = "/people", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public Flux<Person> findAll() {
        return repository.findAll();
    }

    @CrossOrigin
    @GetMapping(value = "/people/{personID}")
    public Mono<Person> find(@PathVariable String personID) {
        return repository.findByUuid(personID);
    }

    @CrossOrigin
    @PostMapping(value ="/people")
    public Mono<Person> save(@RequestBody Mono<Person> body) {
       return body.flatMap(repository::save);
    }

}
