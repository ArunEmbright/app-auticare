import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';
import { PatientDataComponent } from './modules/assesment/patient-data/patient-data.component';


const routes: Routes = [
   { path: '', redirectTo: 'patient-data', pathMatch: 'full' },
   {path:'patient-data',loadChildren:()=>import ('./modules/assesment/assesment.module').then(e=>e.AssesmentModule)},
  
   { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
   { path: 'dashboard', component: LayoutComponent, loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
   { path: 'therapist', component: LayoutComponent,  loadChildren: () => import('./modules/therapist/therapist.module').then(m => m.TherapistModule) },
   { path: 'assessment',component:LayoutComponent, loadChildren: () => import('./modules/assesment/assesment.module').then(m => m.AssesmentModule) },
   { path: 'settings', component: LayoutComponent, loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule) },
   {path:'home', component:LayoutComponent, loadChildren:()=>import('../app/modules/home/home.module').then(e=>e.HomeModule)},
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
