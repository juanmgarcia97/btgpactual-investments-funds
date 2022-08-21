import { Component, OnInit } from '@angular/core';
import { faArrowTrendDown, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { InvestmentFund, Response, Transaction } from '../../utils/types';
import { funds } from '../../utils/investmentFunds';
import { TransactionsService } from '../../transactions/transactions.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { ClientsService } from '../../clients/clients.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {
  displayedColumns: string[] = [
    'fundName',
    'fundMinAmount',
    'fundCategory',
    'actions'
  ];
  data: InvestmentFund[] = funds;
  investedFunds: InvestmentFund[] = [];
  subscribeIcon = faArrowTrendUp;
  unsubscribeIcon = faArrowTrendDown;

  constructor(private transactionService: TransactionsService, private snackBar: MatSnackBar, private clientService: ClientsService) { }

  ngOnInit(): void {
    const clientId = localStorage.getItem('client') ?? '1143873318';
    this.clientService.getClientById(clientId).subscribe(data => {
      const response = data as Response;
      const client = response.data;

    })
  }

  subscription(fundName: string) {
    const transaction: Transaction = {
      type: 'Apertura',
      date: new Date().toUTCString(),
      fund: fundName,
      client: localStorage.getItem('client') ?? '1143873318'
    }
    this.transactionService.saveTransaction(transaction).subscribe(data => {
      const response = data as Response;
      this.openSnackBar(response.message);
    })
  }

  unsubscription(fundName: string) {
    const transaction: Transaction = {
      type: 'Cancelacion',
      date: new Date().toUTCString(),
      fund: fundName,
      client: localStorage.getItem('client') ?? '1143873318'
    }
    this.transactionService.saveTransaction(transaction).subscribe(data => {
      const response = data as Response;
      this.openSnackBar(response.message);
    })
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 4000,
    })
  }
} 