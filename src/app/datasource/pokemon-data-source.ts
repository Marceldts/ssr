import { Injectable, Injector } from "@angular/core";
import { PokemonRemoteDataSource } from "../data/source/pokemon-remote-data-source";
import { Observable } from "rxjs";
import { PokemonDetail, PokemonList } from "../domain/pokemon";

@Injectable()
export class PokemonDataSource extends PokemonRemoteDataSource{

    path: string = "https://pokeapi.co/api/v2/";

    constructor(injector: Injector){
        super(injector);
    }
    override getPokemonDetail(name: string): Observable<PokemonDetail> {
        return this.doRequest<PokemonDetail>('get', `${this.path}pokemon/${name}`);
    }
    override getPokemonList(limit: number): Observable<PokemonList> {
        return this.doRequest<PokemonList>('get', `${this.path}pokemon/?offset=${limit * 20}&limit=20`);
    }
    
}