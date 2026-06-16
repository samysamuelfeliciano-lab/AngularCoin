import { Injectable } from '@angular/core';
import { Conversion } from '../models/conversion.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private HISTORY_KEY = 'angularcoin_history';
  private RATES_KEY = 'angularcoin_rates';
  private SETTINGS_KEY = 'angularcoin_settings';

  saveConversion(conversion: Conversion) {

    const history = this.getHistory();

    history.unshift(conversion);

    localStorage.setItem(
      this.HISTORY_KEY,
      JSON.stringify(history.slice(0, 20))
    );
  }

  getHistory(): Conversion[] {
    return JSON.parse(
      localStorage.getItem(this.HISTORY_KEY) || '[]'
    );
  }

  saveRates(data: any) {
    localStorage.setItem(
      this.RATES_KEY,
      JSON.stringify(data)
    );
  }

  getRates() {
    return JSON.parse(
      localStorage.getItem(this.RATES_KEY) || '{}'
    );
  }

  saveSettings(settings: any) {
    localStorage.setItem(
      this.SETTINGS_KEY,
      JSON.stringify(settings)
    );
  }

  getSettings() {
    return JSON.parse(
      localStorage.getItem(this.SETTINGS_KEY) || '{}'
    );
  }
}