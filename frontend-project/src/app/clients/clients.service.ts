import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Client } from '../utils/types';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private clientApi = `${environment.API_URL}/clients`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type'
    }),
  };
  constructor(private httpClient: HttpClient) { }

  saveClient(client: Client) {
    return this.httpClient.post(this.clientApi, client, this.httpOptions);
  }

  getClientById(id: string) {
    return this.httpClient.get(`${this.clientApi}/${id}`, this.httpOptions);
  }
}