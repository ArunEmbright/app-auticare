import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CyptolandingComponent } from './cyptolanding/cyptolanding.component';

const routes: Routes = [
  
  // tslint:disable-next-line: max-line-length
   
   { path: '', redirectTo: 'auth', pathMatch: 'full' },
   { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
