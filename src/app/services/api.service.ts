import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'https://pokeapi.co/api/v2/';
  list!: Observable<any>;


  constructor(
    private http: HttpClient
  ) { }

  getPokemonList(limit: number): Observable<any>{
    return this.http.get(`${this.url}pokemon/?offset=${limit * 20}&limit=20`);
  }

  getPokemonDetail(name: string): Observable<any>{
    return this.http.get(`${this.url}pokemon/${name}`);
  }
}
