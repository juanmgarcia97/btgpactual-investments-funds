import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { Transaction } from '../utils/types';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private clientApi = `${environment.API_URL}/transactions`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type'
    }),
  };
  constructor(private httpClient: HttpClient) { }

  getTransactionsList(): Observable<Transaction[]> {
    return this.httpClient.get<{ data: Transaction[] }>(this.clientApi, this.httpOptions).pipe(map(data => {
      return data.data;
    }));
  }

  saveTransaction(transaction: Transaction): Observable<Object> {
    return this.httpClient.post(this.clientApi, transaction, this.httpOptions);
  }
}