import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Barragem } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class BarragensService {

  barragensUrl: string;

  constructor(private http: HttpClient) {
    this.barragensUrl =  `${environment.apiBarragemUrl}/barragens`;
   }

   obterTodos(): Promise<any> {
    // const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');
    return this.http.get(this.barragensUrl) // , { headers }
      .toPromise();
  }

  excluir(codigo: number): Promise<void> {
    // const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');
    return this.http.delete(`${this.barragensUrl}/${codigo}`).toPromise().then(() => null); // , { headers }
  }

  adicionar(barragem: Barragem): Promise<Barragem> {
    const headers = new HttpHeaders()
      // .append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu')
      .append('Content-Type', 'application/json');

    return this.http.post<Barragem>(this.barragensUrl, JSON.stringify(barragem), { headers })
      .toPromise();
  }

  atualizar(barragem: Barragem): Promise<Barragem> {
    const headers = new HttpHeaders()
      // .append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu')
      .append('Content-Type', 'application/json');

    return this.http.put<Barragem>(`${this.barragensUrl}/${barragem.codigo}`, JSON.stringify(barragem), { headers })
      .toPromise()
      .then(
        response => {
          return response;
        }
      );
  }

  buscarPorCodigo(codigo: number): Promise<Barragem> {
    // const headers = new HttpHeaders().append('Authorization', 'Basic d2FuZXJzYmhAZ21haWwuY29tOmFkbWlu');

    return this.http.get<Barragem>(`${this.barragensUrl}/${codigo}`) // , { headers }
      .toPromise()
      .then(
        barragem => {
          return barragem;
        }
      );
  }

}