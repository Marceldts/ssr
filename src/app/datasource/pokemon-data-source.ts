import { Injectable, Injector } from "@angular/core";
import { PokemonRemoteDataSource } from "../data/source/pokemon-remote-data-source";
import { Observable } from "rxjs";
import { Pokemon, PokemonListItem } from "../domain/pokemon";

@Injectable()
export class PokemonDataSource extends PokemonRemoteDataSource{

    path: string = "https://pokeapi.co/api/v2/";

    constructor(injector: Injector){
        super(injector);
    }
    override getPokemonDetail(name: string): Observable<Pokemon> {
        return this.doRequest<Pokemon>('get', `${this.path}pokemon/${name}`);
    }
    override getPokemonList(limit: number): Observable<PokemonListItem[]> {
        return this.doRequest<PokemonListItem[]>('get', `${this.path}pokemon/?offset=${limit * 20}&limit=20`);
    }
    
}