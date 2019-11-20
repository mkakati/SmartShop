import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './services/product.service';
import { LoginSellerService } from './services/loginseller.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
 
  // Inject Router so we can hand off the user to the Login Page 
  
    constructor(public auth: LoginSellerService, public router: Router) {}
    canActivate(): boolean {
      debugger;
      if(localStorage.getItem('token')== null) {
        this.router.navigate(['/homepage']);
        return false;
      }
      return true;
    }
  }