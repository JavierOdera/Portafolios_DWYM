import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  private url = "https://api.rawg.io"
  private key = "api/games?key=66b0a5f8abb0457d9989f39b896e6b62"

  constructor(
    private http: HttpClient,
  ) { }

  getJuegos(): Observable<any> {
    const urlFinal = `${this.url}/${this.key}`
    const response = this.http.get<any>(urlFinal) //importante
    return response;
  }


  
}
