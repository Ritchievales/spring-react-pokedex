package com.pokedex;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Set;

import com.pokedex.model.Pokemon;

@RestController
@RequestMapping("/api/pokemon")
public class PokemonController {

    @GetMapping
    public List<Pokemon> getAllPokemon() {
        return Arrays.asList(
                new Pokemon(1,"Bulbasaur", Set.of("Grass", "Poison")),
                new Pokemon(4,"Charmander", Set.of("Fire")),
                new Pokemon(25, "Pikachu", Set.of("Electric"))
        );
    }
}
