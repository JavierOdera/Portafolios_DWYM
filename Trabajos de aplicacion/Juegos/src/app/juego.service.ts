import { Injectable } from '@angular/core';
import { Juego } from './juego';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  private url = "https://api.rawg.io/api/games?key=66b0a5f8abb0457d9989f39b896e6b62"

  constructor() { }

}
