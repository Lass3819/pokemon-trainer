import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-nav',
  templateUrl: './new-nav.component.html',
  styleUrls: ['./new-nav.component.scss']
})
export class NewNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Web || Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    get user(): User | undefined   {
      return this.userService.user
    }



  constructor(private breakpointObserver: BreakpointObserver,
              private readonly userService: UserService
    ) {}


  
}
