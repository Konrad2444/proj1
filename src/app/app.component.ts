import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, LogowanieComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj1';
}
