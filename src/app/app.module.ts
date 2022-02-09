import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstserviesService } from './appservies/firstservies.service';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { HomeComponent } from './home/home.component';
import { ParmsComponent } from './parms/parms.component';


@NgModule({
  declarations: [
    AppComponent,
    Card1Component,
    Card2Component,
    HomeComponent,
    ParmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
],
  providers: [FirstserviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
