import { Component, ElementRef, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../../services/api.service';
import { ViewChild } from '@angular/core';
import { PokeitemComponent } from './components/pokeitem/pokeitem.component';
import { PokelistViewModel } from './pokelist.viewmodel';
import { Observable } from 'rxjs';
import { PokemonListItem } from '../../../domain/pokemon';
import { GetPokeList } from '../../../usecases/get-pokelist';
import { PokemonImplementationRepository } from '../../../data/repository/pokemon-repository/pokemon-implementation.repository';
import { PokemonRepository } from '../../../data/repository/pokemon-repository/pokemon.repository';
import { PokemonRemoteDataSource } from '../../../data/source/pokemon-remote-data-source';
import { PokemonDataSource } from '../../../datasource/pokemon-data-source';

@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PokeitemComponent],
  providers: [ApiService, HttpClient],
  
  templateUrl: './pokelist.component.html',
  styleUrl: './pokelist.component.scss'
})
export class PokelistComponent {
  pokelist: any;
  index: number = 0;
  pokemonList$!: Observable<PokemonListItem[]>;
  @ViewChild('content') contentRef!: ElementRef

  constructor(private api: ApiService, private viewModel: PokelistViewModel){
    // this.getPokemon();
    this.pokemonList$ = this.viewModel.pokemonList$;
    console.log("🚀 ~ file: pokelist.component.ts:28 ~ PokelistComponent ~ constructor ~ this.pokemonList$:", this.pokemonList$)
  }

  getPokemon(){
    this.api.getPokemonList(this.index).subscribe((res: any) => {
      this.pokelist = res.results;
      console.log("🚀 ~ file: pokelist.component.ts:28 ~ PokelistComponent ~ this.api.getPokemonList ~ this.pokelist:", this.pokelist)
    })
  }

  onClick(plus?: boolean){
    this.index = plus? this.index + 1 : this.index - 1;
    // this.pokelist = this.getPokemon()
    this.viewModel.getPokemonListWithLimitOf(this.index);
    console.log("🚀 ~ file: pokelist.component.ts:28 ~ PokelistComponent ~ constructor ~ this.pokemonList$:", this.pokemonList$)
  }
}
