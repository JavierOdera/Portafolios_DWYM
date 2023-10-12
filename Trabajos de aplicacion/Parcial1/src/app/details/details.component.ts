import { Component,Input } from '@angular/core';
import { Jugador } from '../jugador';
import { JugadorService } from '../jugador.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() jugador?: Jugador;

  

  jugadores: Jugador[] = [];
  constructor(
    private route: ActivatedRoute,
    private jugadorService: JugadorService,
    private location: Location) { }

  ngOnInit(): void{
    this.getJugador();
  }


  getJugadores(): void {
    this.jugadores = this.jugadorService.getJugadores()
    
  }

  getJugador(): void {
    const nombre = this.route.snapshot.paramMap.get('nombre');
    console.log(nombre)
    if(nombre)
    {this.jugador = this.jugadorService.getJugador(nombre)}
      
  }
}
