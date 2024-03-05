import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private isDarkModeSubject = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkModeSubject.asObservable();

  constructor() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.body.setAttribute('data-bs-theme', theme);
      this.isDarkModeSubject.next(theme === 'dark');
    }
   }

  toggleDarkMode() {
    this.isDarkModeSubject.next(!this.isDarkModeSubject.value);
    const theme = this.isDarkModeSubject.value ? 'dark' : 'light';
    document.body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }
}