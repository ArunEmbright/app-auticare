import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Role } from "../models/role";
import { AuthenticationService } from "../services/auth.service";

@Injectable()

export class AuthGuard implements CanActivate, CanLoad{

    constructor(private router: Router,
        private authService: AuthenticationService){
        
    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean 
    {
        if(!this.authService.isAuthorized()){
            this.router.navigate(['/doctor'])
            return false
        }
        const roles = route.data.roles as Role[];
        if(roles && !roles.some(r=>this.authService.hasRole(r))){
            this.router.navigate(['error','not-found']);
            return false;
        }
        return true
    }

    canLoad( route: Route):Observable<boolean>| Promise<boolean>|boolean{
        if(!this.authService.isAuthorized()){
            return false;
        }
        const roles = route.data  && route.data.roles as Role[];
        if(roles && !roles.some(r=>this.authService.hasRole(r))){
            return false
        }
        return true;
    }
}