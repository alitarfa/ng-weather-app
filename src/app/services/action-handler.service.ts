import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionHandlerService {
  
  private dataSubject= new BehaviorSubject(false);
  currentModelState = this.dataSubject.asObservable();


  constructor() { }

  /**
   * Open our Model
   */
  openModel = () => {
    console.log('ACTION::OPEN_MODEL');
    this.dataSubject.next(true);
  }

  /**
   * Close our Model
   */
  closeModel = () => {
    console.log('ACTION::CLOSE-MODEL');
    this.dataSubject.next(false);
  }
}
