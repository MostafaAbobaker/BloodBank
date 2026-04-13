import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  
  isCollapsed = signal(false);
  // lang = this.languageService.language();
  // isRtl = computed(() => this.languageService.language() === 'ar');

  menuItems = [
    { path: 'dashboard', icon: 'dashboard', label: 'sidebar.dashboard' },
    { path: 'inventory', icon: 'inventory_2', label: 'sidebar.inventory' },
    { path: 'donors', icon: 'group', label: 'sidebar.donors' },
    { path: 'blood-donation', icon: 'volunteer_activism', label: 'sidebar.bloodDonation' },
    { path: 'blood-request', icon: 'receipt_long', label: 'sidebar.bloodRequest' },
    { path: 'blood-issue', icon: 'outbox', label: 'sidebar.bloodIssue' },
    { path: 'blood-testing', icon: 'biotech', label: 'sidebar.bloodTesting' },
    { path: 'blood-supply', icon: 'local_shipping', label: 'sidebar.bloodSupply' },
    { path: 'component-extraction', icon: 'Science', label: 'sidebar.componentExtraction' },
    { path: 'blood-disposal', icon: 'delete_sweep', label: 'sidebar.bloodDisposal' },
    { path: 'reports', icon: 'insights', label: 'sidebar.reports' },
  ];

  toggleSidebar() {
    this.isCollapsed.update(v => !v);
  }
}
