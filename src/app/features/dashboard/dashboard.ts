import { Component } from '@angular/core';
import { Title } from "./components/title/title";
import { KPI } from "./components/kpi/kpi";
import { PieChart } from './components/pie-chart/pie-chart';
import { BarChart } from './components/bar-chart/bar-chart';
import { PendingRequests } from './components/pending-requests/pending-requests';
import { NearExpiry } from "./components/near-expiry/near-expiry";
import { Unscreened } from "./components/unscreened/unscreened";
import { PatientClosedCases } from './components/patient-closed-cases/patient-closed-cases';

@Component({
  selector: 'app-dashboard',
  imports: [Title, KPI, BarChart, PieChart, PendingRequests, NearExpiry, Unscreened, PatientClosedCases],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
