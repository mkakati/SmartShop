import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {LogoutService} from '../../../services/logout/logout.service'
import {BehavioursubjectService} from '../../../services/behavioursubject/behavioursubject.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private toaster:ToastrService,
    private logoutService:LogoutService,private behavoursubject:BehavioursubjectService) { }

  ngOnInit() {
     
  }
  logout(){
    this.logoutService.logout();
    // localStorage.clear();
    // this.router.navigate(['/login']);
    // this.toaster.success('please login again');
  }

  changepass(){
    this.router.navigate(['/changepass']);
  }
}
