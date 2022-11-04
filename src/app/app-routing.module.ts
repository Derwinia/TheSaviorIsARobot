import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { ApiComponent } from './pages/api/api.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'game', component : GameComponent},
  {path : 'api', component : ApiComponent},
  {path : 'contact', component : ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
