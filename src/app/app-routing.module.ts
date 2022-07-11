import { GasyListComponent } from './gasy-list/gasy-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path :'' , component : LandingPageComponent },
  { path :'e-gasyList' , component : GasyListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
