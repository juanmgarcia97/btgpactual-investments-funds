import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Client } from '../utils/types';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private clientApi = `${environment.API_URL}/clients`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  saveClient(client: Client) {
    return this.httpClient.post(this.clientApi, client, this.httpOptions);
  }

  getClientById(id: string): Observable<Client> {
    return this.httpClient
      .get<{ data: Client }>(`${this.clientApi}/${id}`, this.httpOptions)
      .pipe(
        map((data) => {
          return data.data;
        })
      );
  }
}
