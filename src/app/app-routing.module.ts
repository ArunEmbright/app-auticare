import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/authTherapist.guard';
import { Role } from './core/models/role';
import { AuthenticationService } from './core/services/auth.service';
import { DoctorLayoutComponent } from './doctorLayout/layout.component';
import { DoctorLayoutsModule } from './doctorLayout/layouts.module';
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
     path:'', 
     component:LayoutComponent, 
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
      
   ]
  },
  {
    path:'',
    component:DoctorLayoutComponent,
    children:[
      {
        path:'doctor',
        canLoad:[AuthGuard],
        canActivate:[AuthGuard],
        data:{
          roles:[
            Role.THERAPIST
          ]
        },
        loadChildren:()=>import('./modules/doctor/doctor.module').then(m=>m.DoctorModule)
      },
    ]
  },
  
  {
   path: '**',
   redirectTo: 'dashboard',
   pathMatch: 'full'
 
 },
  
   {path: 'assessment', loadChildren: () => import('./modules/assesment/assesment.module').then(m => m.AssesmentModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'corrected', useHash: true })],
  exports: [RouterModule],
  providers:[
    AuthGuard,
    AuthenticationService
  ]
})

export class AppRoutingModule { }
