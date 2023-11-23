import { Observable } from "rxjs";
import { PokemonDetail, PokemonList } from "../../domain/models/pokemon";
import { Request } from "../../domain/base/request";

export abstract class PokemonRemoteDataSource extends Request{
    abstract getPokemonList(limit: number): Observable<PokemonList>;
    abstract getPokemonDetail(name: string): Observable<PokemonDetail>;
}