import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import translationsEN from "../assets/i18n/en.json";
import translationsAR from "../assets/i18n/ar.json";
import { Loading } from './shared/components/loading/loading';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loading],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private translate: TranslateService) {
        this.translate.setTranslation('en', translationsEN);
        this.translate.setTranslation('ar', translationsAR);
    }
}
