import { Component, ElementRef, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { ViewChild } from '@angular/core';
import { PokeitemComponent } from './components/pokeitem/pokeitem.component';

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
  @ViewChild('content') contentRef!: ElementRef

  constructor(private api: ApiService){
    this.getPokemon();
  }

  getPokemon(){
    this.api.getPokemonList(this.index).subscribe((res: any) => {
      this.pokelist = res.results;
    })
  }

  onClick(plus?: boolean){
    this.index = plus? this.index + 1 : this.index - 1;
    this.pokelist = this.getPokemon()
  }
}
