import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-pie-chart',
  imports: [TranslatePipe],
  templateUrl: './pie-chart.html',
  styleUrl: './pie-chart.css',
})
export class PieChart {}
