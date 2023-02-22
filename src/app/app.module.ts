import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SintaxisDePlantillaComponent } from './sintaxis-de-plantilla/sintaxis-de-plantilla.component';




@NgModule({
  declarations: [
    AppComponent,
    SintaxisDePlantillaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
