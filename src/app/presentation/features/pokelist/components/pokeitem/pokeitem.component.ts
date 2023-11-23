import { ChangeDetectorRef, Component, Input, afterNextRender } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GetPokeDetail } from '../../../../../usecases/get-pokedetail';
import { Pokemon, PokemonDetail, PokemonListItem } from '../../../../../domain/pokemon';

@Component({
  selector: 'pokeitem',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgOptimizedImage],
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
