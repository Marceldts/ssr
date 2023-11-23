import { Injectable } from "@angular/core";
import { UseCase } from "../base/use-case";
import { PokemonDetail } from "../domain/pokemon";
import { PokemonRepository } from "../data/repository/pokemon-repository/pokemon.repository";
import { Observable } from "rxjs";

@Injectable()
export class GetPokeDetail implements UseCase<string, PokemonDetail>{
    constructor(private pokemonRepository: PokemonRepository){}
    execute(name: string): Observable<PokemonDetail> {
        return this.pokemonRepository.getPokemonDetail(name);
    }
}