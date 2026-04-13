import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-patient-closed-cases',
  imports: [TranslatePipe],
  templateUrl: './patient-closed-cases.html',
  styleUrl: './patient-closed-cases.css',
})
export class PatientClosedCases {}
