import { Component, Inject, OnInit } from '@angular/core';
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
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/utils/notification.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  amount: number;
  fund: string;
}

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
  transactionAmount!: number;

  constructor(
    private transactionService: TransactionsService,
    private route: ActivatedRoute,
    private notifier: NotificationService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.client = data['client'];
    });
  }

  openDialogSubscription(fund: InvestmentFund) {
    const dialogRef = this.dialog.open(TransactionAmountDialog, {
      data: { fund: fund.name, amount: this.transactionAmount },
      panelClass: 'dialog'
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.transactionAmount = result;
      this.subscription(fund);
    });
  }

  subscription(fund: InvestmentFund) {
    const transaction: Transaction = {
      type: 'Apertura',
      date: new Date().toUTCString(),
      fund: fund,
      amount: this.transactionAmount,
      client: localStorage.getItem('client') ?? '1143873318',
    };
    this.transactionService.saveTransaction(transaction).subscribe((data) => {
      const response = data as Response;
      this.notifier.showNotification(response.message);
    });
  }

  unsubscription(fund: InvestmentFund) {
    const transaction: Transaction = {
      type: 'Cancelacion',
      date: new Date().toUTCString(),
      fund: fund,
      client: localStorage.getItem('client') ?? '1143873318',
    };
    this.transactionService.saveTransaction(transaction).subscribe((data) => {
      const response = data as Response;
      this.notifier.showNotification(response.message);
    });
  }
}

@Component({
  selector: 'app-transaction-amount-dialog',
  templateUrl: './transaction-amount-dialog.html',
})
export class TransactionAmountDialog {
  constructor(
    public dialogRef: MatDialogRef<TransactionAmountDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
