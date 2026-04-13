import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewDonorData } from '../interface/new-donor-data';

@Injectable({
  providedIn: 'root',
})
export class DonorService {
  private readonly _http = inject(HttpClient);

  registerDonor(donorData: NewDonorData): Observable<any> {
    return this._http.post('/donors', donorData);
  }
}
