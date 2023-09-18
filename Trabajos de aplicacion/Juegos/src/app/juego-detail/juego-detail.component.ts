import { Component, Input } from '@angular/core';
import { Juego } from '../juego';

@Component({
  selector: 'app-juego-detail',
  templateUrl: './juego-detail.component.html',
  styleUrls: ['./juego-detail.component.css']
})
export class JuegoDetailComponent {
  @Input() juego: Juego = {
    id: 0,
    nombre: "",
    imagen: "",
    rating: 0
  };
  @Input() mostrar1?: boolean;
}
