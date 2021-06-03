import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CyptolandingComponent } from './cyptolanding/cyptolanding.component';

const routes: Routes = [
  
  // tslint:disable-next-line: max-line-length
   { path: 'crypto-ico-landing', component: CyptolandingComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
