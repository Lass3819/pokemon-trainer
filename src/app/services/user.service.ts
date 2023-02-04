import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user?: User;

  get user(): User | undefined{
    return this._user;
  }

  set user(user: User | undefined){
    StorageUtil.storageSave<User>(StorageKeys.User, user!)
    this._user = user;
  }

  constructor() { 
    this._user = StorageUtil.storageRead<User>(StorageKeys.User);
    
  }

  public alreadyCollected(name: string): boolean{
    if(this._user){
      return Boolean(this._user.pokemon.find((pokemon: Pokemon) => pokemon.name === name))

    }
    
    return false;
  }

  public removeFromCollected(name: string):void {
    if(this._user){
      this._user.pokemon = this._user.pokemon.filter((pokemon:Pokemon) => pokemon.name != name)
    }
  }

  public addToCollected(pokemon: Pokemon): void{
    if(this._user){
      this._user.pokemon.push(pokemon)
    }
  }
}
