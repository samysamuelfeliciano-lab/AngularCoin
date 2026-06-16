import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';
import { StorageService } from '../../services/storage.service';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html'
})
export class ChartComponent implements AfterViewInit {

  @ViewChild('chartCanvas')
  chartCanvas!: ElementRef<HTMLCanvasElement>;

  private platformId = inject(PLATFORM_ID);

  constructor(
    private storage: StorageService
  ) {}

  ngAfterViewInit() {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const history =
      this.storage.getHistory();

    const labels =
      history
        .slice(0, 10)
        .reverse()
        .map((item: any) =>
          new Date(item.date)
            .toLocaleDateString()
        );

    const values =
      history
        .slice(0, 10)
        .reverse()
        .map((item: any) =>
          item.result
        );

    new Chart(
      this.chartCanvas.nativeElement,
      {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Conversões Registradas',
              data: values,
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true
        }
      }
    );
  }
}