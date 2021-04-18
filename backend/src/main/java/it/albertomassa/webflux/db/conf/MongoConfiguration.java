package it.albertomassa.webflux.db.conf;

import com.mongodb.reactivestreams.client.MongoClient;
import com.mongodb.reactivestreams.client.MongoClients;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.data.mongodb.ReactiveMongoDatabaseFactory;
import org.springframework.data.mongodb.config.AbstractReactiveMongoConfiguration;
import org.springframework.data.mongodb.core.ReactiveMongoTemplate;
import org.springframework.data.mongodb.core.SimpleReactiveMongoDatabaseFactory;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;

@Configuration
@EnableReactiveMongoRepositories(value = "it.albertomassa.webflux.db.repository")
@Import(value = MongoAutoConfiguration.class)
public class MongoConfiguration extends AbstractReactiveMongoConfiguration {

    @Value("${mongo.db.name}")
    private String databaseName;
    @Value("${mongo.db.client}")
    private String client;

    @Override
    protected String getDatabaseName() {
        return this.databaseName;
    }

    @Override
    public @Bean MongoClient reactiveMongoClient() {
        return MongoClients.create(this.client);
    }

    public ReactiveMongoDatabaseFactory mongoDbFactory() {
        return new SimpleReactiveMongoDatabaseFactory(
                reactiveMongoClient(), getDatabaseName());
    }

    @Bean
    public ReactiveMongoTemplate reactiveMongoTemplate() {
        return new ReactiveMongoTemplate(mongoDbFactory());
    }

}
