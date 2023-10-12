import { Injectable } from '@angular/core';
import { jugadores } from './jugadores';
import { Jugador } from './jugador';





@Injectable({
  providedIn: 'root'
})

export class JugadorService {

  constructor() { }
  getJugadores(): Array<any>{

    return jugadores;
  }

  getJugador(nombre: string): Jugador {
  return this.getJugadores().filter(h => h.nombre == nombre)[0];
  }
}
