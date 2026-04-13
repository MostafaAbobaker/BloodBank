import { Component, signal, Signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { NewDonorData } from '../../interface/new-donor-data';
import { FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-new-donor',
  imports: [TranslatePipe,InputTextModule,FormField],
  templateUrl: './new-donor.html',
  styleUrl: './new-donor.css',
})
export class NewDonor {
   

  newDonor= signal<NewDonorData>({
    nameAr: '',
    nameEn: '',
    ID: '',
    DateOfBirth: new Date(),
    Gender: '',
    Occupation: '',
    MobileNumber: '',
    Phone: '',
    Email: '',
    Address: '',
    BloodType: '',
    MedicalHistory: '',
    Notes: '',
  });
  submit(event: Event) {
    event.preventDefault();
  }
}
