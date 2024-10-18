import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'M-Travel';

  constructor(private translate: TranslateService) {
    // Default tilni sozlash
    this.translate.setDefaultLang('ru');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
