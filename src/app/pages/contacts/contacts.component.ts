import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.translate.use(savedLanguage); 
  }

  changeLanguage(event: Event): void {
    const selectElement = event.target as HTMLSelectElement | null;
    const selectedLanguage = selectElement?.value || 'en'; 
    this.translate.use(selectedLanguage); // Tilni o'zgartirish
    localStorage.setItem('selectedLanguage', selectedLanguage); 
  }  
}