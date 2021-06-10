import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
   { path: '', redirectTo: 'auth', pathMatch: 'full' },
   { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
   { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
   { path: 'therapist', loadChildren: () => import('./modules/therapist/therapist.module').then(m => m.TherapistModule) },
   { path: 'assessment', loadChildren: () => import('./modules/assesment/assesment.module').then(m => m.AssesmentModule) },
   {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'corrected', useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
