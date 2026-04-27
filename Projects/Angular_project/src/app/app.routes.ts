import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { IceCreamAdminComponent } from './components/ice-cream-admin/ice-cream-admin';
import { BillingComponent } from './components/billing/billing';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: IceCreamAdminComponent },
  { path: 'billing', component: BillingComponent },
  { path: '**', redirectTo: '' }
];
