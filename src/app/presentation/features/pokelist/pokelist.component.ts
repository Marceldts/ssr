import { Component, ElementRef, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../../services/api.service';
import { ViewChild } from '@angular/core';
import { PokeitemComponent } from './components/pokeitem/pokeitem.component';
import { PokemonList, PokemonListItem } from '../../../domain/pokemon';
import { GetPokeList } from '../../../usecases/get-pokelist';

@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PokeitemComponent],
  providers: [ApiService, HttpClient, GetPokeList],
  
  templateUrl: './pokelist.component.html',
  styleUrl: './pokelist.component.scss'
})
export class PokelistComponent {
  pokelist!: PokemonListItem[];
  index: number = 0;
  @ViewChild('content') contentRef!: ElementRef

  constructor(private getPokemonListUseCase: GetPokeList){
    this.getPokemon();
  }

  getPokemon(){
    this.getPokemonListUseCase.execute(this.index).subscribe((res: any) => {
      this.pokelist = res.results;
    })
  }

  onClick(plus?: boolean){
    this.index = plus? this.index + 1 : this.index - 1;
    this.getPokemonListUseCase.execute(this.index).subscribe((list: PokemonList) => {
      this.pokelist = list.results;
    })
  }
}
