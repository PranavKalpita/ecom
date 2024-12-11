import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private addressSubject = new BehaviorSubject<string>("We will deliver everywhere");
  private role = new BehaviorSubject<String | null>(null);

  constructor() { 
    const userDetails = JSON.parse(sessionStorage.getItem('UserDetails') || '{}');
    this.isLoggedInSubject.next(!!userDetails.address); 
    this.addressSubject.next(userDetails.address || "We will deliver everywhere");
    this.role.next(userDetails.role || null);
  }

  get isLoggedIn$() {
    return this.isLoggedInSubject.asObservable();
  }

  get address$() {
    return this.addressSubject.asObservable();
  }
  
  get userRole()
  {
    return this.role.asObservable();
  }

  login(userDetails: any): void {
    sessionStorage.setItem('UserDetails', JSON.stringify(userDetails));
    this.isLoggedInSubject.next(true);
    this.addressSubject.next(userDetails.address);
    this.role.next(userDetails.role);
  }

  logout(): void {
    sessionStorage.removeItem('UserDetails');
    this.isLoggedInSubject.next(false);
    this.addressSubject.next("We will deliver everywhere");
    this.role.next(null);
  }

}
