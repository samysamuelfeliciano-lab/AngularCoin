import { Component } from '@angular/core';
import { ChartComponent } from '../../components/chart/chart.component';

@Component({
  selector: 'app-chart-page',
  standalone: true,
  imports: [ChartComponent],
  template: `
    <app-chart></app-chart>
  `
})
export class ChartPageComponent {}