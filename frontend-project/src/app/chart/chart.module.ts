import { NgModule } from "@angular/core";
import { NgChartsModule } from "ng2-charts";
import { ChartComponent } from './chart.component';

@NgModule({
    declarations: [ChartComponent],
    imports: [NgChartsModule],
    exports: [ChartComponent]
})
export class ChartModule { }