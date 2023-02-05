import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';

@Component({
  selector: 'app-pokemon-catalouge',
  templateUrl: './pokemon-catalogue.page.html',
  styleUrls: ['./pokemon-catalogue.page.scss']
})
export class PokemonCataloguePage implements OnInit{
  currentPage = 0;

  previousClick():void{
    if(this.currentPage<= 0){
      return;
    }
    this.currentPage--;
  }

  nextClick():void{
    if(this.currentPage>=50){
      return;
    }
    this.currentPage++;
  }

  get pokemon(): Pokemon[] {
    return this.pokemonCatalogueService.pokemon;
  }

  get loading(): boolean{
    return this.pokemonCatalogueService.loading;
  }

  get error(): string{
    return this.pokemonCatalogueService.error;
  }

  constructor(
    private readonly pokemonCatalogueService: PokemonCatalogueService
  ){}
  ngOnInit(): void {
    this.pokemonCatalogueService.findAllPokemons();
    
      
  }

}
