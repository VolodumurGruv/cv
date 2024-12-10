import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/outlet/layout/layout.component';

export const routes: Routes = [
  { path: '', component: LayoutComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
