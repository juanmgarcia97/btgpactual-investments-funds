import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { TransactionsListComponent } from "./transactions-list/transactions-list.component";
import { TransactionsListResolver } from './transactions-list/transactions-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: TransactionsListComponent,
    resolve: {
      transactions: TransactionsListResolver
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }