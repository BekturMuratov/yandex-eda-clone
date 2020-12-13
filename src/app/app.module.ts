import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddressSearchComponent } from './components/address-search/address-search.component';
import { FoodNavigationComponent } from './components/food-navigation/food-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddressSearchComponent,
    FoodNavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
