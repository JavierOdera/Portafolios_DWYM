import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {
  entrada: string = '';

  @Output() busqueda = new EventEmitter<string>();

  onInputChange() {
    console.log('entrada', this.entrada)
    this.busqueda.emit(this.entrada);
  }
}
