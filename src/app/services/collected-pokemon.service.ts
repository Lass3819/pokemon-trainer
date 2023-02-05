import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { environment } from 'src/environment';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
import { PokemonCatalogueService } from './pokemon-catalogue.service';
import { UserService } from './user.service';

const { apiUsers, apiKey} = environment

@Injectable({
  providedIn: 'root'
})
export class CollectedPokemonService {

  private _loading: boolean = false;

  get loading(): boolean{
    return this._loading;
  }

  constructor(
    private http: HttpClient,
    private readonly pokemonService: PokemonCatalogueService,
    private readonly userService: UserService
  ) { }



  public addToCollected(name: string): Observable<User>{
    if(!this.userService.user){
      throw new Error("no user")
    }
    const user: User = this.userService.user;
    const pokemon: Pokemon | undefined = this.pokemonService.pokemonByName(name)


    if(!pokemon){
      throw new Error("No pokemon with that name")
    }
    if(this.userService.alreadyCollected(name)){
      this.userService.removeFromCollected(name)
    } else {
      this.userService.addToCollected(pokemon)
    }

    const headers = new HttpHeaders({
      "content-type": "application/json",
      "x-api-key": apiKey
    })
    this._loading = true;
    return this.http.patch<User>(`${apiUsers}/${user.id}`,{
      pokemon: [...user.pokemon] //Already updated
    }, {
      headers
    })
    .pipe(
      tap((updatedUser: User)=>{
        this.userService.user = updatedUser;
      }),
      finalize(()=> {this._loading = false;})
    )

  }


}
