import { Component, ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { PokeitemComponent } from './components/pokeitem/pokeitem.component';
import { PokemonList, PokemonListItem } from '../../../domain/models/pokemon';
import { GetPokeList } from '../../../domain/usecases/get-pokelist';
import { PresentationModule } from '../../presentation.module';

@Component({
  selector: 'app-pokelist',
  standalone: true,
  imports: [ PresentationModule, PokeitemComponent],
  
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
