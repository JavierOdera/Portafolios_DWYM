import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegosComponent } from './juegos/juegos.component';
import { JuegoDetailComponent } from './juego-detail/juego-detail.component';
import { JuegoJugarComponent } from './juego-jugar/juego-jugar.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegosComponent,
    JuegoDetailComponent,
    JuegoJugarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
