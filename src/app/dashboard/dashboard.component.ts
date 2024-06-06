import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isLoggedIn: boolean;

  constructor(private authService: AuthService, private cdr: ChangeDetectorRef) {
    this.isLoggedIn = this.authService.isLoggedIn;
    console.log('Dashboard Component - isLoggedIn:', this.isLoggedIn);
  }

  ngOnInit() {
    this.cdr.detectChanges();  // Wymuszenie detekcji zmian
  }
}
