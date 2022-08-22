import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../utils/types';
import { ClientsService } from './clients.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsResolver implements Resolve<Client> {

  constructor(private clientService: ClientsService) {}

  resolve(): Client | Observable<Client> | Promise<Client> {
    return this.clientService.getClientById(localStorage.getItem('client') ?? '1143873318');
  }

}
