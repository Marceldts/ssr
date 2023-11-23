import { Injectable } from "@angular/core";
import { GetPokeDetail } from "../../../usecases/get-pokedetail";
import { GetPokeList } from "../../../usecases/get-pokelist";
import { Observable } from "rxjs";
import { PokemonListItem } from "../../../domain/pokemon";

@Injectable({
    providedIn: 'root'
})
export class PokelistViewModel{

    pokemonList$!: Observable<PokemonListItem[]>;
    constructor(
        private getPokemonList: GetPokeList,
        private getPokemonDetail: GetPokeDetail
    ){
    }

    getPokemonListWithLimitOf(limit: number){
        console.warn("Aqui llega con ", limit)
        this.pokemonList$ = this.getPokemonList.execute(limit);
        console.warn("Aqui no llega")
        this.pokemonList$.subscribe(res => console.warn("RES ", res))
        return this.pokemonList$;
    }
}