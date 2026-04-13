import { Component, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewDonorData } from '../../interface/new-donor-data';
import { DonorService } from '../../services/donor.service';

@Component({
  selector: 'app-new-donor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslatePipe,
    InputTextModule,
    SelectModule,
    DatePickerModule,
    TextareaModule,
    ButtonModule
  ],
  templateUrl: './new-donor.html',
  styleUrl: './new-donor.css',
})
export class NewDonor {
  private readonly donorService = inject(DonorService);

  newDonor = signal<NewDonorData>({
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

  genderOptions = [
    { label: 'Male / ذكر', value: 'male' },
    { label: 'Female / أنثى', value: 'female' }
  ];

  bloodTypeOptions = [
    { label: 'A+', value: 'A+' },
    { label: 'A-', value: 'A-' },
    { label: 'B+', value: 'B+' },
    { label: 'B-', value: 'B-' },
    { label: 'AB+', value: 'AB+' },
    { label: 'AB-', value: 'AB-' },
    { label: 'O+', value: 'O+' },
    { label: 'O-', value: 'O-' }
  ];

  submit(event: Event) {
    event.preventDefault();
    const donorData = this.newDonor();
    console.log('Submitting donor data:', donorData);
    
    this.donorService.registerDonor(donorData).subscribe({
      next: (res) => {
        console.log('Donor registered successfully:', res);
        // Reset form or navigate
      },
      error: (err) => {
        console.error('Error registering donor:', err);
      }
    });
  }

  resetForm() {
    this.newDonor.set({
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
  }
}
