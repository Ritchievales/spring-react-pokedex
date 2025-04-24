package com.pokedex;

import java.util.HashSet;
import java.util.Set;

public class Pokemon {

    private Long id;
    private Integer dexNumber;
    private String name;
    private Set<String> types;

    public Pokemon(Long id, Integer dexNumber, String name, Set<String> types) {
        this.id = id;
        this.dexNumber = dexNumber;
        this.name = name;
        this.types = new HashSet<>(types);
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
