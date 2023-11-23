import { Injectable } from "@angular/core";
import { UseCase } from "../base/use-case";
import { PokemonList } from "../domain/pokemon";
import { PokemonRepository } from "../data/repository/pokemon-repository/pokemon.repository";
import { Observable } from "rxjs";

@Injectable()
export class GetPokeList implements UseCase<number, PokemonList>{
    constructor(private pokemonRepository: PokemonRepository){}
    execute(limit: number): Observable<PokemonList> {
        return this.pokemonRepository.getPokemonList(limit);
    }
}