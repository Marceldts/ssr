import { ChangeDetectorRef, Component, Input, afterNextRender } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { GetPokeDetail } from '../../../../../domain/usecases/get-pokedetail';
import { PokemonDetail, PokemonListItem } from '../../../../../domain/models/pokemon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'pokeitem',
  standalone: true,
  imports: [ NgOptimizedImage, RouterModule],
  providers: [GetPokeDetail],
  templateUrl: './pokeitem.component.html',
  styleUrl: './pokeitem.component.scss'
})
export class PokeitemComponent {

  pokemonDetail!: PokemonDetail;
  @Input('pokemon') pokemon!: PokemonListItem;

  constructor(private cdRef: ChangeDetectorRef, private getPokemonDetailUseCase: GetPokeDetail){

    afterNextRender(() => {
      this.getPokemonDetail(); 
    });  
  }

  getPokemonDetail(){
    this.getPokemonDetailUseCase.execute(this.pokemon.name).subscribe((res: PokemonDetail) => {
      this.pokemonDetail = res;
      this.cdRef.detectChanges();
    })
  }
}
