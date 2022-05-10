import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Categories } from '../categories/categories.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiUrl = "http://localhost:3000/";
  message: string;
  alert: string;
  private category = new Subject();
  sharedMessage = this.category.asObservable();

  constructor() { }

  nextMessage(categoryData) {
    this.category.next(categoryData);
  }
  
}
