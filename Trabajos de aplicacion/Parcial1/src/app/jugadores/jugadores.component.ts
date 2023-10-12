import { Component } from '@angular/core';
import { Jugador } from '../jugador';
import { JugadorService } from '../jugador.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent {

  jugadores: Jugador[] = [];
  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void{
    this.getJugadores();
  }


  getJugadores(): void {
    this.jugadores = this.jugadorService.getJugadores()
    
  }
  delete(jugador: Jugador): void {
    this.jugadores = this.jugadores.filter(h => h !== jugador);
    
  }
  agregar():void{
      const jugador: Jugador = {nombre:'nombregenerico', posicion:'mediocampo', foto:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FFelicidad&psig=AOvVaw26K5nrf2jrd1lHiZO9923s&ust=1697155788345000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODdj5Gc74EDFQAAAAAdAAAAABAE'} 
    this.jugadores.push(jugador)
  }



}
