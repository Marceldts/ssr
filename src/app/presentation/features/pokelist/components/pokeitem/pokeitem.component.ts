import { ChangeDetectorRef, Component, Input, afterNextRender } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ApiService } from '../../../../../services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'pokeitem',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgOptimizedImage],
  providers: [ApiService],
  templateUrl: './pokeitem.component.html',
  styleUrl: './pokeitem.component.scss'
})
export class PokeitemComponent {

  pokemonDetail: any;
  @Input('pokemon') pokemon!: any;

  constructor(private api: ApiService, private cdRef: ChangeDetectorRef){

    afterNextRender(() => {
      // Safe to check `scrollHeight` because this will only run in the browser, not the server.
      this.getPokemonDetail(); 
    });  
  }

  getPokemonDetail(){
    this.api.getPokemonDetail(this.pokemon.name).subscribe((res: any) => {
      this.pokemonDetail = res;
      this.cdRef.detectChanges();
    })
  }
}
