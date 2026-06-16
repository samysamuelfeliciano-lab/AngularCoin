import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage.service';
import { Conversion } from '../../models/conversion.model';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html'
})
export class HistoryComponent {

  history: Conversion[] = [];

  constructor(private storage: StorageService) {
    this.history = this.storage.getHistory();
  }
}