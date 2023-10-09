import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url = ""//aca va el url
  private key = ""// aca va lo que sigue al url

  constructor(
    private http:HttpClient,
  ) {}

  getProductos(): Observable<any>{
    const urlFinal = `${this.url}/${this.key}`
    const response = this.http.get<any>(urlFinal)
    return response;
  }
}
