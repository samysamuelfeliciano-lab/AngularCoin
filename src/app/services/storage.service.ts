import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private HISTORY_KEY = 'angularcoin_history';
  private RATES_KEY = 'angularcoin_rates';
  private SETTINGS_KEY = 'angularcoin_settings';

  private platformId = inject(PLATFORM_ID);

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  saveConversion(conversion: any) {

    if (!this.isBrowser()) return;

    const history = this.getHistory();

    history.push(conversion);

    localStorage.setItem(
      this.HISTORY_KEY,
      JSON.stringify(history)
    );
  }

  getHistory(): any[] {

    if (!this.isBrowser()) return [];

    return JSON.parse(
      localStorage.getItem(this.HISTORY_KEY) || '[]'
    );
  }

  saveRates(data: any) {

    if (!this.isBrowser()) return;

    localStorage.setItem(
      this.RATES_KEY,
      JSON.stringify(data)
    );
  }

  getRates() {

    if (!this.isBrowser()) return {};

    return JSON.parse(
      localStorage.getItem(this.RATES_KEY) || '{}'
    );
  }

  saveSettings(settings: any) {

    if (!this.isBrowser()) return;

    localStorage.setItem(
      this.SETTINGS_KEY,
      JSON.stringify(settings)
    );
  }

  getSettings() {

    if (!this.isBrowser()) return {};

    return JSON.parse(
      localStorage.getItem(this.SETTINGS_KEY) || '{}'
    );
  }
}