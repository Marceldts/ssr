import { Observable } from "rxjs";
import { Pokemon, PokemonListItem } from "../../domain/pokemon";
import { Request } from "../../base/request";

export abstract class PokemonRemoteDataSource extends Request{
    abstract getPokemonList(limit: number): Observable<PokemonListItem[]>;
    abstract getPokemonDetail(name: string): Observable<Pokemon>;
}