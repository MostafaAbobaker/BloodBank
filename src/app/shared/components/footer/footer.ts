import { Component, inject, OnInit } from '@angular/core';
import { Language } from '../../services/language';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  standalone: true,
  providers: [Language],
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {

  private readonly language = inject(Language);
  lang: string = 'en';
  

   ngOnInit(): void {
    this.lang = this.language.language();
  }
  toggleLanguage(langName?:string) {
    debugger
    this.language.toggleLanguage(langName);
    this.lang = this.language.language();
  }
}
