import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PokemonRepository } from '../data/repository/pokemon-repository/pokemon.repository';
import { PokemonImplementationRepository } from '../data/repository/pokemon-repository/pokemon-implementation.repository';
import { GetPokeList } from '../usecases/get-pokelist';
import { PokemonRemoteDataSource } from '../data/source/pokemon-remote-data-source';
import { PokemonDataSource } from '../datasource/pokemon-data-source';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers: [
    {
      provide: PokemonRepository,
      useClass: PokemonImplementationRepository
    },
    {
      provide: PokemonRemoteDataSource,
      useClass: PokemonDataSource
    },
    GetPokeList
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ssr';
}
