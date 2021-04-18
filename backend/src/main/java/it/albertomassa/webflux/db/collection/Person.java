package it.albertomassa.webflux.db.collection;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor

@Document(value = "People")
public class Person {

    @Id
    private String uuid;

    private String name;
    private String surname;

}
