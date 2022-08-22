import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { Chart } from "chart.js";
import { ClientsService } from '../clients/clients.service';
import { Response, Client } from '../utils/types';
import { funds } from '../utils/investmentFunds';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {
  canvas: any;
  ctx: any;
  @ViewChild('pieCanvas') pieCanvas!: { nativeElement: any };
  pieData: any[] = [];
  pieLabels: string[] = [];
  pieChart: any;

  constructor(private clientService: ClientsService) {
    this.clientService.getClientById(localStorage.getItem('client') ?? '1143873318').subscribe(data => {
      const client = data as Client;
      client.investments?.forEach((fund, index) =>
        this.pieData[index] = fund.minAmount
      ) ?? [];
      client.investments?.forEach((fund, index) => this.pieLabels[index] = fund.name) ?? [];
    })
  }

  ngAfterViewInit(): void {
    this.pieChartBrowser();
  }

  pieChartBrowser(): void {
    this.canvas = this.pieCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.pieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: this.pieLabels,
        datasets: [
          {
            backgroundColor: [
              '#2ecc71',
              '#3498db',
              '#95a5a6',
              // '#9b59b6',
              // '#f1c40f',
            ],
            data: this.pieData,
          },
        ],
      },
    });
  }
}
