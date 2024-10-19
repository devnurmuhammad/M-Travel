import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'M-Travel';

  constructor(public translate: TranslateService) {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage); // Dastur yuklanganda o'sha tilni qo'llash
  }

  ngOnInit(): void {
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    this.translate.use(currentLang); // Tilni sahifa yuklanganda o'rnatish
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang); // Tanlangan tilga o‘tish
    localStorage.setItem('selectedLanguage', lang);
  }
}
