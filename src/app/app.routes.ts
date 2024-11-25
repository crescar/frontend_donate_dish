import { Routes } from '@angular/router';
import { CookComponent } from './cook/cook.component';
import { PlatesComponent } from './plates/plates.component';

export const routes: Routes = [
  {
    path: 'manager',
    component: CookComponent
  },
  {
    path: 'cooking',
    component: PlatesComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/manager',
  },
  {
    path: '**',
    redirectTo: '/manager',
    pathMatch: 'full',
  },
];
