import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html'
})
export class SettingsComponent {

  frequency = 'daily';

  constructor(private storage: StorageService) {

    const settings = this.storage.getSettings();

    if (settings.frequency) {
      this.frequency = settings.frequency;
    }
  }

  save() {

    this.storage.saveSettings({
      frequency: this.frequency
    });

    alert('Configurações salvas com sucesso!');
  }
}