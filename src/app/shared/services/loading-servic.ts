import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingServic {
  loading = signal(false);

  setLoading(loading: boolean) {
    this.loading.set(loading);
  }

  showLoading() {
    this.setLoading(true);
  }

  hideLoading() {
    this.setLoading(false);
  }
}
