import { Injectable } from "@angular/core";
import { UseCase } from "../base/use-case";
import { Pokemon } from "../domain/pokemon";
import { PokemonRepository } from "../data/repository/pokemon-repository/pokemon.repository";
import { Observable } from "rxjs";

@Injectable()
export class GetPokeDetail implements UseCase<string, Pokemon>{
    constructor(private pokemonRepository: PokemonRepository){}
    execute(name: string): Observable<Pokemon> {
        return this.pokemonRepository.getPokemonDetail(name);
    }
}