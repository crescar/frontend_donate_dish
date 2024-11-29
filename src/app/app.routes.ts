import { Routes } from '@angular/router';
import { CookComponent } from './cook/cook.component';
import { PlatesComponent } from './plates/plates.component';
import { StorageComponent } from './storage/storage.component';
import { ShoppingLogsComponent } from './shopping-logs/shopping-logs.component';
import { RecipesComponent } from './recipes/recipes.component';

export const routes: Routes = [
  {
    path: 'manager',
    component: CookComponent
  },
  {
    path: 'kitchen',
    component: PlatesComponent
  },
  {
    path: 'storage',
    component: StorageComponent
  },
  {
    path: 'shopping-logs',
    component: ShoppingLogsComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent
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
