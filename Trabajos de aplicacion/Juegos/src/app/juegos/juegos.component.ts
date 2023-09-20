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
  pagina: number = 1;
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
      .subscribe(juegos => {
        juegos.results.map((juego: any) => {
          let nuevoJuego = {
            id: juego.id,
            nombre: juego.name,
            imagen: juego.background_image,
            rating: juego.rating
          }
          this.juegos.push(nuevoJuego)
          this.pagina++;
        })
      })

  }

  ngOnInit(): void {
    this.getJuegos();
  }
}

