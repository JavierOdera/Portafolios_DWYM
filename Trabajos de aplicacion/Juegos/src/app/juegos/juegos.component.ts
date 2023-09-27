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
  juegosFiltrados: Juego[] = [];
  pagina: number = 1;
  constructor(private juegoService: JuegoService) { }
  jugarPressed = false;
  detailsPressed = false;


  selectedJuego: Juego = {
    id: 0,
    nombre: "",
    imagen: "",
    rating: 0,
    sugerencias: 0
  };;
  puntuar(juego: Juego): void {
    if (this.detailsPressed = false) {////////////////////deberia salirse si ya fue apretado
      this.detailsPressed = true;
      this.selectedJuego = juego;
      this.jugarPressed = false;
      console.log(this.jugarPressed);
    } else {
      this.detailsPressed = false;
      console.log(this.detailsPressed)

    }

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
            rating: juego.rating,
            sugerencias: juego.suggestions_count
          }
          this.juegos.push(nuevoJuego)
          this.pagina++;
        })
        this.juegosFiltrados = this.juegos
      })

  }

  ngOnInit(): void {
    this.getJuegos();
    console.log(this.juegos)
  }

  mensaje: string = "";

  recibirMensaje(entrada: string) {
    this.mensaje = entrada;
    this.filtrarJuegos(entrada)
  }

  filtrarJuegos(entrada: string) {
    this.juegosFiltrados = this.juegos.filter((e) => e.nombre.toLowerCase().includes(entrada.toLowerCase()));
  }

}

