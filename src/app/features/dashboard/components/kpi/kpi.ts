import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-kpi',
  imports: [TranslatePipe],
  templateUrl: './kpi.html',
  styleUrl: './kpi.css',
})
export class KPI {}
