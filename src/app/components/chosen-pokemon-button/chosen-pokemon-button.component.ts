import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { CollectedPokemonService } from 'src/app/services/collected-pokemon.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chosen-pokemon-button',
  templateUrl: './chosen-pokemon-button.component.html',
  styleUrls: ['./chosen-pokemon-button.component.scss']
})
export class ChosenPokemonButtonComponent implements OnInit{
  
  public isCollected: boolean = false;
  @Input() pokemonName: string = "";

  get loading(): boolean{
    return this.collectedService.loading;
  }

  constructor(
    private userService: UserService,
    private readonly collectedService: CollectedPokemonService
  ){

  }
  ngOnInit(): void {
      this.isCollected = this.userService.alreadyCollected(this.pokemonName)
  }
  
  onPokemonClick(): void{
    
    this.collectedService.addToCollected(this.pokemonName)
      .subscribe({
        next: (user: User) => {
          this.isCollected = this.userService.alreadyCollected(this.pokemonName)

        },
        error: (error: HttpErrorResponse) => {
          console.log("error",error.message)
        }
      })
  }

}
