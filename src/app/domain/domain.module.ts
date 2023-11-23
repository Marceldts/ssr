import { NgModule } from '@angular/core';
import { PokemonImplementationRepository } from '../data/repository/pokemon/pokemon-implementation.repository';
import { PokemonRemoteDataSource } from '../data/source/pokemon-remote-data-source';
import { PokemonDataSource } from '../datasource/pokemon-data-source';
import { PokemonRepository } from './repository/pokemon.repository';
import { GetPokeDetail } from './usecases/get-pokedetail';
import { GetPokeList } from './usecases/get-pokelist';




@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    {
      provide: PokemonRepository,
      useClass: PokemonImplementationRepository
    },
    {
      provide: PokemonRemoteDataSource,
      useClass: PokemonDataSource
    },
    GetPokeList,
    GetPokeDetail
  ],
})
export class DomainModule { }
