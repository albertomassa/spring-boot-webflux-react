package it.albertomassa.webflux.db.repository;

import it.albertomassa.webflux.db.collection.Person;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public interface PersonRepository  extends ReactiveMongoRepository<Person, String> {

    Mono<Person> findByUuid(String uuid);

}
