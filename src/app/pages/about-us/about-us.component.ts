import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {
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

  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
