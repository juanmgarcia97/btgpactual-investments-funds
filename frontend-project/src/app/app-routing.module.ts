import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FundsComponent } from './funds/funds-list/funds.component';
import { TransactionsListComponent } from './transactions/transactions-list/transactions-list.component';
import { ChartComponent } from './chart/chart.component';
import { ClientsAddComponent } from './clients/add/clients-add.component';
import { ClientsResolver } from './clients/clients.resolver';

const routes: Routes = [
  {
    path: 'investment-funds',
    component: FundsComponent,
    resolve: {
      client: ClientsResolver
    }
  },
  {
    path: 'history',
    loadChildren: () => import('./transactions/transactions.module').then((m) => m.TransactionsModule)
  },
  {
    path: 'chart',
    component: ChartComponent
  },
  {
    path: 'clients',
    component: ClientsAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
