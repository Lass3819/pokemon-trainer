import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent {

  @Input() pokemon?: Pokemon;

  returnSpriteUrl(urlId: string):string{
    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
    let id = urlId.slice(41).slice(0,-1)
    return url+id+".png"
  }

}
