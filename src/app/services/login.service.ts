import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environment';
import { User } from '../models/user.model';

const { apiUsers, apiKey } = environment

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //Dependecy Injection
  constructor(private readonly http: HttpClient) { }

  public login(username: string): Observable<User>{
    return this.checkUsername(username)
      .pipe(
        switchMap((user: User | undefined) => {
          if( user === undefined){
            return this.createUser(username);
          }
          return of(user)
        })

    )


  }

  //check if user exists
  private checkUsername(username: string): Observable<User | undefined>{
    return this.http.get<User[]>(`${apiUsers}?username=${username}`)
      .pipe(
        map((response: User[]) =>response.pop())

    )
    
  }


  //Create user
  private createUser(name: string): Observable<User>{
    //user
    const user = {
      username: name,
      pokemon: []
    }
    // headers -> API key
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": apiKey
    })
    return this.http.post<User>(apiUsers,user,{headers})
  }


}
