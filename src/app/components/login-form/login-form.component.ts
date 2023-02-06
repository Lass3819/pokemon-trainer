import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Output() login: EventEmitter<void> = new EventEmitter();

  constructor( 
    private readonly loginService: LoginService,
    private readonly userService: UserService
    ) { }

    public loginSubmit(loginForm: NgForm): void {
      const { username } = loginForm.value;


      this.loginService.login(username)
        .subscribe({
          next: (user: User) => {
            this.userService.user = user;
            this.login.emit();
          },
          error: () => {

          }
      })
    }

}


