import { Routes } from '@angular/router';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [

  { path: '', redirectTo: '/logowanie', pathMatch: 'full' },
  { path: 'logowanie', component: LogowanieComponent },
  { path: 'dashboard', component: DashboardComponent }
];
