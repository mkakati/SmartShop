import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
import { from } from 'rxjs';
import { BehavioursubjectService } from '../behavioursubject/behavioursubject.service';
@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private router:Router,private toaster:ToastrService,private behavioursubject:BehavioursubjectService) { }
  logout(){
    //localStorage.clear();
    localStorage.removeItem('authenticationToken')
    localStorage.removeItem('accountid')
    this.router.navigate(['/home']);
    this.behavioursubject.changeState(false)
    this.toaster.success("you have been logout successfully");
  }
}
