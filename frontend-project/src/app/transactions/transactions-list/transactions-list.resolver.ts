import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Transaction } from '../../utils/types';
import { TransactionsService } from '../transactions.service';

@Injectable({
    providedIn: 'root'
})
export class TransactionsListResolver implements Resolve<Transaction[]> {

    constructor(private transactionService: TransactionsService) { }
    resolve(): Transaction[] | Observable<Transaction[]> | Promise<Transaction[]> {
        return this.transactionService.getTransactionsList();
    }

}