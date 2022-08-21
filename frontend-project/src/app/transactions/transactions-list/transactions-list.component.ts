import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TransactionsService } from '../transactions.service';
import { Transaction } from '../../utils/types';
import { faDownload } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-transactions-list',
    templateUrl: './transactions-list.component.html',
    styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {
    displayedColumns: string[] = [
        'id',
        'type',
        'date',
        'fund',
        'client',
    ];
    data: Transaction[] = [];
    downloadIcon = faDownload;

    constructor(private route: ActivatedRoute, private transactionService: TransactionsService) { }

    ngOnInit(): void {
        this.route.data.subscribe((data) => {
            this.data = data['transactions'];
        })
    }

}