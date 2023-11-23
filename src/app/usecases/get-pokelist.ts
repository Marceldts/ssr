import { Injectable } from "@angular/core";
import { UseCase } from "../base/use-case";
import { PokemonListItem } from "../domain/pokemon";
import { PokemonRepository } from "../data/repository/pokemon-repository/pokemon.repository";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GetPokeList implements UseCase<number, PokemonListItem[]>{
    constructor(private pokemonRepository: PokemonRepository){
        console.log("Aqui peta?")
        console.log(pokemonRepository)
    }
    execute(limit: number): Observable<PokemonListItem[]> {
        return this.pokemonRepository.getPokemonList(limit);
    }
}