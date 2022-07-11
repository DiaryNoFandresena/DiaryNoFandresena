import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GasyListComponent } from './gasy-list/gasy-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { GasyComponent } from './gasy/gasy.component';

@NgModule({
  declarations: [
    AppComponent,
    GasyListComponent,
    LandingPageComponent,
    HeaderComponent,
    GasyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
