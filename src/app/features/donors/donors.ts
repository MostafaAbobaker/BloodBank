import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";
import { TableModule } from 'primeng/table';
import { DonorDataService } from './services/donor-data-service';


@Component({
  selector: 'app-donors',
  imports: [TranslatePipe, RouterLink, TableModule],
  templateUrl: './donors.html',
  styleUrl: './donors.css',
})
export class Donors {
  private readonly donorService = inject(DonorDataService);
  donors = this.donorService.getDonorsData();
}
