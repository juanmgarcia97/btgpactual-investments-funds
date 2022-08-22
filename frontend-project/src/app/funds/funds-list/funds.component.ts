import { Component, OnInit } from '@angular/core';
import {
  faArrowTrendDown,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons';
import {
  Client,
  InvestmentFund,
  Response,
  Transaction,
} from '../../utils/types';
import { funds } from '../../utils/investmentFunds';
import { TransactionsService } from '../../transactions/transactions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClientsService } from '../../clients/clients.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/utils/notification.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss'],
})
export class FundsComponent implements OnInit {
  displayedColumns: string[] = [
    'fundName',
    'fundMinAmount',
    'fundCategory',
    'actions',
  ];
  data: InvestmentFund[] = funds;
  investedFunds: InvestmentFund[] = [];
  client!: Client;
  subscribeIcon = faArrowTrendUp;
  unsubscribeIcon = faArrowTrendDown;

  constructor(
    private transactionService: TransactionsService,
    private route: ActivatedRoute,
    private notifier: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.client = data['client'];
    });
  }

  subscription(fundName: string) {
    const transaction: Transaction = {
      type: 'Apertura',
      date: new Date().toUTCString(),
      fund: fundName,
      client: localStorage.getItem('client') ?? '1143873318',
    };
    this.transactionService.saveTransaction(transaction).subscribe((data) => {
      const response = data as Response;
      this.notifier.showNotification(response.message);
    });
  }

  unsubscription(fundName: string) {
    const transaction: Transaction = {
      type: 'Cancelacion',
      date: new Date().toUTCString(),
      fund: fundName,
      client: localStorage.getItem('client') ?? '1143873318',
    };
    this.transactionService.saveTransaction(transaction).subscribe((data) => {
      const response = data as Response;
      this.notifier.showNotification(response.message);
    });
  }
}
