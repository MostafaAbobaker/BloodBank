import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-unscreened',
  imports: [TranslatePipe],
  templateUrl: './unscreened.html',
  styleUrl: './unscreened.css',
})
export class Unscreened {}
