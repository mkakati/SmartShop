import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BehavioursubjectService } from './services/behavioursubject/behavioursubject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bankfrontend';
  islogin = true;
  isLoginUrl = false;
  constructor(private route: Router, private dataservice: BehavioursubjectService) {
    this.route.events.subscribe(res => {
      console.log(res);
      if (res instanceof NavigationEnd) {
       
        if (res.url === '/login' || res.url === '/register' || res.url === '/verify' || res.url === '/forgotpass' || res.url.split('?')[0] === '/resetpass' || res.url.split('?')[0] === '/userorder' || res.url === '/linkaccount'|| res.url === '/testtable'|| res.url === '/tansaction') {
          this.isLoginUrl = true;
        } else { 
          this.isLoginUrl = false;
        }
      }
    })
  };

  ngOnInit() {
    this.dataservice.currentState.subscribe(res => {
      debugger
      this.islogin = res;
    })
//     if (localStorage.getItem('authenticationToken') == null || localStorage.getItem('authenticationToken') == '') {
// debugger
//       this.route.navigate(['/home']);
//       this.islogin=false
//   }
  }

}
