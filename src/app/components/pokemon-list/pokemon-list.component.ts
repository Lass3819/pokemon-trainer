import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  @Input() pokemon: Pokemon[] = [];

  returnSprite(urlId: string):string{
    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
    let id = urlId.slice(41).slice(0,-1)
    
    return url+id+".png"
  }
  




  constructor(){

  }

}
