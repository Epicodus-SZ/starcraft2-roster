import { ModuleWithProviders } from '@angular/core'; // Provides this router to the rest of the app
import { Routes, RouterModule } from '@angular/router'; // Render specific components when specific urls are provided to the router

import { RosterComponent } from './roster/roster.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { UnitDetailComponent } from './unit-detail/unit-detail.component';



// Master list of all available routes, contains values that other code in the app cannot change
const appRoutes: Routes = [
  {
    path: '',
    component: RosterComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },  
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'roster',
    component: RosterComponent
  },
  {
    path: 'units/:id',
    component: UnitDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
