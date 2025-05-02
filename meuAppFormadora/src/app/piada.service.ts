import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PiadaService {
  private apiUrl = 'https://v2.jokeapi.dev/joke/Any';

  constructor(private http: HttpClient) {}


  pegarPiada(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  
}

