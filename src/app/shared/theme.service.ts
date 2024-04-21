import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themeKey = 'darkMode';

  constructor() {
    this.loadTheme();
  }

  enableDarkMode() {
    document.body.classList.add('dark');
    localStorage.setItem(this.themeKey, 'true');
  }

  disableDarkMode() {
    document.body.classList.remove('dark');
    localStorage.setItem(this.themeKey, 'false');
  }

  toggleDarkMode() {
    if (document.body.classList.contains('dark')) {
      this.disableDarkMode();
    } else {
      this.enableDarkMode();
    }
  }

  private loadTheme() {
    const darkMode = localStorage.getItem(this.themeKey) === 'true';
    if (darkMode) {
      document.body.classList.add('dark');
    }
  }
}
