import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-near-expiry',
  imports: [TranslatePipe],
  templateUrl: './near-expiry.html',
  styleUrl: './near-expiry.css',
})
export class NearExpiry {}
