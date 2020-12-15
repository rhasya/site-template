package com.snow.server.author;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Author {
    @Id
    @GeneratedValue
    private Long id;

    private String korName;

    public Long getId() {
        return id;
    }
    public String getKorName() {
        return korName;
    }
}
