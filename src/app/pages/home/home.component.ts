import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { Conversion } from '../../models/conversion.model';
import { RouterModule } from '@angular/router';

import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  amount = 1;
  from = 'BRL';
  to = 'USD';
  result = 0;

  currencies = [
    'USD',
    'BRL',
    'EUR',
    'GBP',
    'JPY',
    'CAD',
    'AUD',
    'CHF'
  ];

  constructor(
    private currencyService: CurrencyService,
    private storage: StorageService
  ) {}

  invert() {
    [this.from, this.to] = [this.to, this.from];
  }

  convert() {

  this.currencyService
    .getRates(this.from)
    .subscribe({

      next: (data: any) => {

        this.storage.saveRates(data);

        const rate = data.rates[this.to];

        this.result = this.amount * rate;

        this.storage.saveConversion({
          from: this.from,
          to: this.to,
          amount: this.amount,
          result: this.result,
          rate,
          date: new Date().toISOString()
        });

      },

      error: () => {

        const offlineData =
          this.storage.getRates();

        const rate =
          offlineData?.rates?.[this.to];

        if(rate){

          this.result =
            this.amount * rate;

          alert(
            'Sem internet. Utilizando última cotação salva.'
          );
        }
      }
    });
  }

}