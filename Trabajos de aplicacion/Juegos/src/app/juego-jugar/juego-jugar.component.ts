import { Component, Input } from '@angular/core';
import { Juego } from '../juego';

@Component({
  selector: 'app-juego-jugar',
  templateUrl: './juego-jugar.component.html',
  styleUrls: ['./juego-jugar.component.css']
})
export class JuegoJugarComponent {
  @Input() juego: Juego = {
    id: 0,
    nombre: "",
    imagen: "",
    rating: 0
  };
  @Input() mostrar2?: boolean;
}
