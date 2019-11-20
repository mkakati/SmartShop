
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { from } from 'rxjs';
import { BehavioursubjectService } from 'src/app/services/behavioursubject/behavioursubject.service';
export default class Logout {

    constructor(private router: Router, private toaster: ToastrService, private dataservice: BehavioursubjectService) { }


    public logout() {
        debugger
       // localStorage.clear();
        localStorage.removeItem('authenticationToken')
        localStorage.removeItem('accountid');
        this.dataservice.changeState(false);
        this.router.navigate(['/home']);
        this.toaster.success('please login again');
    }



}