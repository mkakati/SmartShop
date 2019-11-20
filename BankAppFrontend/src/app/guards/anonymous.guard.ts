import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnonymousGuard implements CanActivate  {
  constructor(private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if(localStorage.getItem('authenticationToken')==null){
     
      return true;
    }
   
    else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
  
}
