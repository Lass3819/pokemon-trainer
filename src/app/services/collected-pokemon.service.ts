import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  constructor(
    private http: HttpClient,
    private readonly pokemonService: PokemonCatalogueService,
    private readonly userService: UserService
  ) { }
  //get pokemon based on id


  // patch request with user id and pokemon


  public addToCollected(name: string): void{
    if(!this.userService.user){
      throw new Error("no user")
    }
    const user: User = this.userService.user;
    const pokemon: Pokemon | undefined = this.pokemonService.pokemonByName(name)


    if(!pokemon){
      throw new Error("No pokemon with that name")
    }
    if(user.pokemon.includes(pokemon)){
      
    }
    //this.http.patch()

  }


}
