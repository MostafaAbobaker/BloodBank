import { Component, inject, OnInit } from '@angular/core';
import { Language } from '../../services/language';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  providers: [Language],
  selector: 'app-header',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
 
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
