import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Language } from './shared/services/language';
import { TranslateService } from '@ngx-translate/core';
import translationsEN from "../assets/i18n/en.json";
import translationsAR from "../assets/i18n/ar.json";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private translate: TranslateService) {
        this.translate.setTranslation('en', translationsEN);
        this.translate.setTranslation('ar', translationsAR);
    }
}
