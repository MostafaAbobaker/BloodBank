import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-pending-requests',
  imports: [TranslatePipe],
  templateUrl: './pending-requests.html',
  styleUrl: './pending-requests.css',
})
export class PendingRequests {}
