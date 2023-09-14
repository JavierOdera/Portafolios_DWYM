import { Component } from '@angular/core';
import { Juego } from '../juego';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent {
  juego: Juego = {
    id: 1,
    nombre: 'Buscaminas',
    imagen: '',
    rating: 0
  }
}
