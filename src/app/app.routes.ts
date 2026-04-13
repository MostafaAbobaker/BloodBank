import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout';
import { Login } from './core/auth/login/login';
import { Error404 } from './shared/components/error-404/error-404';
import { Error500 } from './shared/components/error-500/error-500';
import { Dashboard } from './features/dashboard/dashboard';
import { Donors } from './features/donors/donors';
import { Inventory } from './features/inventory/inventory';
import { Reports } from './features/reports/reports';
import { Error401 } from './shared/components/error-401/error-401';
import { NewDonor } from './features/donors/components/new-donor/new-donor';
import { BloodDonation } from './features/blood-donation/blood-donation';
import { EnterDonation } from './features/blood-donation/components/enter-donation/enter-donation';
import { BloodDisposal } from './features/blood-disposal/blood-disposal';
import { ComponentExtraction } from './features/component-extraction/component-extraction';
import { BloodSupply } from './features/blood-supply/blood-supply';
import { BloodTesting } from './features/blood-testing/blood-testing';
import { BloodIssue } from './features/blood-issue/blood-issue';
import { Requests } from './features/requests/requests';

export const routes: Routes = [
  // {path:'', redirectTo:'Login', pathMatch:'full'},
  { path: 'Login', component: Login },
  { path: '', component: Layout, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard },
    { path: 'donors', component: Donors },
    { path: 'new-donor', component: NewDonor },
    { path: 'inventory', component: Inventory },
    { path: 'blood-donation', component: BloodDonation }, // Placeholder components
    { path: 'enter-donation', component: EnterDonation }, // Placeholder components
    { path: 'blood-request', component: Requests },
    { path: 'blood-issue', component: BloodIssue },
    { path: 'blood-testing', component: BloodTesting },
    { path: 'blood-supply', component: BloodSupply },
    { path: 'component-extraction', component: ComponentExtraction },
    { path: 'blood-disposal', component: BloodDisposal },
    { path: 'reports', component: Reports },
  ] },
  { path: '500', component: Error500 },
  { path: '401', component: Error401 },
  { path: '**', component: Error404 }
];
