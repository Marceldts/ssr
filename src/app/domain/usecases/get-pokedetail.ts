import { Injectable } from "@angular/core";
import { UseCase } from "../base/use-case";
import { PokemonDetail } from "../models/pokemon";
import { PokemonRepository } from "../repository/pokemon.repository";
import { Observable } from "rxjs";

@Injectable()
export class GetPokeDetail implements UseCase<string, PokemonDetail>{
    constructor(private pokemonRepository: PokemonRepository){}
    execute(name: string): Observable<PokemonDetail> {
        return this.pokemonRepository.getPokemonDetail(name);
    }
}