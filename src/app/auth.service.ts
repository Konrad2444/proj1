import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  loginStatusChanged = new EventEmitter<boolean>();

  login() {
    this.isLoggedIn = true;
    this.loginStatusChanged.emit(this.isLoggedIn);
  }

  logout() {
    this.isLoggedIn = false;
    this.loginStatusChanged.emit(this.isLoggedIn);
  }
}
