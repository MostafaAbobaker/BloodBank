import { Component, inject } from '@angular/core';
import { LoadingServic } from '../../services/loading-servic';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.html',
  styleUrl: './loading.css',
})
export class Loading {
  private readonly _loadingServic = inject(LoadingServic);
  loading = this._loadingServic.loading;
}
