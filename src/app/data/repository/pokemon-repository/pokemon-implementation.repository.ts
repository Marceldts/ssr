import { Injectable } from "@angular/core";
import { PokemonRepository } from "./pokemon.repository";
import { Observable } from "rxjs";
import { Pokemon, PokemonList, PokemonListItem } from "../../../domain/pokemon";
import { PokemonRemoteDataSource } from "../../source/pokemon-remote-data-source";

@Injectable()
export class PokemonImplementationRepository extends PokemonRepository {
    constructor(private pokemonRemoteDataSource: PokemonRemoteDataSource){
        super();
    }

    override getPokemonList(limit: number): Observable<PokemonList> {
        return this.pokemonRemoteDataSource.getPokemonList(limit);
    }
    override getPokemonDetail(name: string): Observable<Pokemon> {
        return this.pokemonRemoteDataSource.getPokemonDetail(name);
    }
}