package com.pokedex.model;

import jakarta.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
public class Pokemon {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer dexNumber;

    private String name;

    @ElementCollection
    private Set<String> types;

    public Pokemon(Integer dexNumber, String name, Set<String> types) {
        this.dexNumber = dexNumber;
        this.name = name;
        this.types = types;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getDexNumber() {
        return dexNumber;
    }

    public void setDexNumber(Integer dexNumber) {
        this.dexNumber = dexNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<String> getTypes() {
        return types;
    }

    public void setTypes(Set<String> types) {
        this.types = types;
    }
}
