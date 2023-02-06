import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginPage } from './pages/login/login.page';
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';
import { TrainerPage } from './pages/trainer/trainer.page';

import { NewNavComponent } from './new-nav/new-nav.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/login"
  },
  {
    path: "login",
    component: LoginPage
  },
  {
    path: "pokemon",
    component: PokemonCataloguePage,
    canActivate: [ AuthGuard ]
  },
  {
    path: "trainer",
    component: TrainerPage,
    canActivate: [ AuthGuard ]
  },

  {
    path: "newnav",
    component: NewNavComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
