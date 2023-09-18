import { Component } from '@angular/core';
import { Juego } from '../juego';
import { JuegoService } from '../juego.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent {
  juegos: Juego[] = [];
  constructor(private juegoService: JuegoService) { }
  jugarPressed = false;
  detailsPressed = false;


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
  jugar(juego: Juego) {
    this.jugarPressed = true;
    this.selectedJuego = juego;
    this.detailsPressed = false;
  }

  getJuegos(): void {
    this.juegoService.getJuegos()
        .subscribe(juegos => this.juegos = juegos);
  }

  ngOnInit(): void {
    this.getJuegos();
  }
}

