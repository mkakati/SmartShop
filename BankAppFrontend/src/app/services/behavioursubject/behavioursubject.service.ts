import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehavioursubjectService {
  private state = new BehaviorSubject(false);
  currentState = this.state.asObservable();
  constructor() {
    const x = localStorage.getItem('authenticationToken')
    if (x) {
      this.state.next(true);
    } else { 
      this.state.next(false);
    }
  }

  changeState(status: boolean) {

    this.state.next(status);
  }
}
