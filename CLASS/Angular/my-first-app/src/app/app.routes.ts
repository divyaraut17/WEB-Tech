import { Routes } from '@angular/router';
import { Admin } from '../admin/admin';

export const routes: Routes = [
  { path: 'students-list', component: Admin },
  { path: 'add-student', component: Admin }
];
