import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PokemonDetail, PokemonList } from "../models/pokemon";

@Injectable()

export abstract class PokemonRepository {
    abstract getPokemonList(limit: number): Observable<PokemonList>;
    abstract getPokemonDetail(name: string): Observable<PokemonDetail>;
}