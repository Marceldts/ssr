import { Injectable } from "@angular/core";
import { PokemonRepository } from "./pokemon.repository";
import { Observable } from "rxjs";
import { PokemonDetail, PokemonList } from "../../../domain/pokemon";
import { PokemonRemoteDataSource } from "../../source/pokemon-remote-data-source";

@Injectable()
export class PokemonImplementationRepository extends PokemonRepository {
    constructor(private pokemonRemoteDataSource: PokemonRemoteDataSource){
        super();
    }

    override getPokemonList(limit: number): Observable<PokemonList> {
        return this.pokemonRemoteDataSource.getPokemonList(limit);
    }
    override getPokemonDetail(name: string): Observable<PokemonDetail> {
        return this.pokemonRemoteDataSource.getPokemonDetail(name);
    }
}