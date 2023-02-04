import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chosen-pokemon-button',
  templateUrl: './chosen-pokemon-button.component.html',
  styleUrls: ['./chosen-pokemon-button.component.scss']
})
export class ChosenPokemonButtonComponent {
  @Input() pokemonName: string = "";

  
  onPokemonClick(): void{
    
    alert(this.pokemonName);
  }

}
