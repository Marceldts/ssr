import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon, PokemonListItem } from "../../../domain/pokemon";

@Injectable({
    providedIn: 'root'
})

export abstract class PokemonRepository {
    abstract getPokemonList(limit: number): Observable<PokemonListItem[]>;
    abstract getPokemonDetail(name: string): Observable<Pokemon>;
}