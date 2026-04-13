import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-title',
  imports: [TranslatePipe],
  templateUrl: './title.html',
  styleUrl: './title.css',
})
export class Title {}
