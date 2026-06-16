import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ChartPageComponent } from './pages/chart/chart-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
  path: 'chart',
  component: ChartPageComponent
  }
];