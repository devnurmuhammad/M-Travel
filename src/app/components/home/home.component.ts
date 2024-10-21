import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.translate.use(savedLanguage); // Saqlangan tilni tiklash
  }

  changeLanguage(event: Event): void {
    const selectElement = event.target as HTMLSelectElement | null;
    const selectedLanguage = selectElement?.value || 'en'; 
    this.translate.use(selectedLanguage); // Tilni o'zgartirish
    localStorage.setItem('selectedLanguage', selectedLanguage); 
  }

  isMenuVisible = false;
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  isMenuVisible2 = false;
  toggleMenu2() {
    this.isMenuVisible2 = !this.isMenuVisible2;
  }
}
