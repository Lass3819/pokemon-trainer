import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';
import { environment } from 'src/environment';
import { Pokemon, PokemonList } from '../models/pokemon.model';
const { apiPokemon } = environment;
@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogueService {

  private _pokemon: Pokemon[] = []
  private _error: string = "";
  private _loading: boolean = false;

  get pokemon(): Pokemon[]{
    return this._pokemon;
  }

  get error(): string{
    return this._error;
  }

  get loading(): boolean{
    return this._loading;
  }

  constructor(private readonly http: HttpClient) { }

  public findAllPokemons(): void{
    this._loading = true;
    this.http.get<PokemonList>(apiPokemon)
      .pipe(
        finalize(()=>{
          this._loading = false;
        })
      )
      .subscribe({
        next: (pokemon: PokemonList) => {
          this._pokemon = pokemon.results

        },
        error: (error: HttpErrorResponse) => {
          this._error = error.message;

        }

      }
    )
  }


}
