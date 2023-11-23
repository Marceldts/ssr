import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon, PokemonList } from "../../../domain/pokemon";

@Injectable()

export abstract class PokemonRepository {
    abstract getPokemonList(limit: number): Observable<PokemonList>;
    abstract getPokemonDetail(name: string): Observable<Pokemon>;
}