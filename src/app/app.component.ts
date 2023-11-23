import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PokemonImplementationRepository } from './data/repository/pokemon-repository/pokemon-implementation.repository';
import { PokemonRepository } from './data/repository/pokemon-repository/pokemon.repository';
import { PokemonRemoteDataSource } from './data/source/pokemon-remote-data-source';
import { PokemonDataSource } from './datasource/pokemon-data-source';
import { GetPokeList } from './usecases/get-pokelist';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
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
