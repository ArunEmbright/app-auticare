import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/modules/auth/login/login.component';
import { SignupComponent } from 'src/app/modules/auth/signup/signup.component';
import { TherapistLoginComponent } from './therapist-login/therapist-login.component';
import { TokenVerifyComponent } from './token-verify/token-verify.component';



const routes: Routes = [
  {
      path: '',
      redirectTo: 'login', 
      pathMatch: 'full'
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: 'signup',
      component: SignupComponent
  },
  {
    path: 'verify/otp',
    component: TokenVerifyComponent
},
{
  path:'therapist-login',
  component:TherapistLoginComponent
}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
