import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  apiUrl = "http://localhost:3000/contatos";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.apiUrl);
  }
  
  getById(id: number): Observable<Contato> {
    return this.http.get<Contato>(`${this.apiUrl}/${id}`);
  }

  save(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.apiUrl, contato);
  }

  delete(contato: Contato): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${contato.id}`);
  }

  update(contato: Contato): Observable<Contato> {
    return this.http.put<Contato>(`${this.apiUrl}/${contato.id}`, contato);
  }
}
