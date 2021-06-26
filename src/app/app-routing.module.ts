import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';
import { PatientDataComponent } from './modules/assesment/patient-data/patient-data.component';


const routes: Routes = [
   { 
     path: '', redirectTo: 'patient-data', pathMatch: 'full' 
    },
   {
     path:'patient-data',
     loadChildren:()=>import ('./modules/assesment/assesment.module').then(e=>e.AssesmentModule)
    },
   {
    path: 'auth',
     loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
   {
     path:'', component:LayoutComponent, 
     children:[
      { 
        path: 'dashboard',
         loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },

      {
         path: 'therapist',  
         loadChildren: () => import('./modules/therapist/therapist.module').then(m => m.TherapistModule) 
      },
      
      { 
        path: 'settings', 
        loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule) 
      },

      {
        path:'home',  
        loadChildren:()=>import('../app/modules/home/home.module').then(e=>e.HomeModule)
      },
      {
       path: '**',
       redirectTo: 'dashboard',
       pathMatch: 'full'
     
     }
   ]},
   {path: 'assessment', loadChildren: () => import('./modules/assesment/assesment.module').then(m => m.AssesmentModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'corrected', useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
