import {  isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID,  inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Injectable({
  providedIn: 'root',
})
export class Language {
  private readonly platformId = inject(PLATFORM_ID);
    private readonly isBrowser = isPlatformBrowser(this.platformId);
    private translate = inject(TranslateService);

    language = signal<string>('en'); // الحالة الافتراضية: مفتوح

    constructor() {
      this.checkLanguage();
    }

    /* Change language */
    checkLanguage() {
      if (this.isBrowser) {
        const storedLang = localStorage.getItem('langRtl');

        if (storedLang) {
          this.language.set(storedLang);
          const dir = storedLang === 'ar' ? 'rtl' : 'ltr';
          document.documentElement.setAttribute('dir', dir);
          document.documentElement.setAttribute('lang', storedLang);
          this.translate.use(storedLang);


        } else {
          this.language.set('en'); // القيمة الافتراضية
          document.documentElement.setAttribute('dir', 'ltr');
          document.documentElement.setAttribute('lang', 'en');
          this.translate.use('en');

        }
      }
    }

    toggleLanguage(langName?:string) {  //en
      let lang = this.language();
      if (lang === 'en' || langName === 'ar') {
        this.rtlLang();
      } else {
        this.ltrLang();
      }
    }

    applyLanguage(langValue:'en' | 'ar') {
      this.language.set(langValue);
      if (this.isBrowser) {
        localStorage.setItem('langRtl', langValue);
        const dir = langValue == 'ar' ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', dir);
        document.documentElement.setAttribute('lang', langValue);
      }
    }

    rtlLang() {
      this.applyLanguage('ar');
      this.translate.use('ar');
    }

    ltrLang() {
      this.applyLanguage('en');
      this.translate.use('en');
    }
}
