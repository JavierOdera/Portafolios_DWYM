import { Component } from '@angular/core';
import { Juego } from '../juego';
import { JUEGOS } from '../mock-juegos';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent {
  juegos = JUEGOS;
  jugarPressed = false;
  detailsPressed = false;
  /*juego: Juego = {
    id: 1,
    nombre: 'Buscaminas',
    imagen: '',
    rating: 4
  }*/

  selectedJuego: Juego = {
    id: 0,
    nombre: "",
    imagen: "",
    rating: 0
  };;
  puntuar(juego: Juego): void {
    this.detailsPressed = true;
    this.selectedJuego = juego;
    this.jugarPressed = false;
  }
  jugar(juego:Juego) {
    this.jugarPressed = true;
    this.selectedJuego = juego;
    this.detailsPressed = false;
  }
}

