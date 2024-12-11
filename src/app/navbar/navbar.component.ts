import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  address: string | null = null;
  isLoggedIn: boolean = false;

  constructor(private authService:AuthService){}

  ngOnInit():void{
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
    this.authService.address$.subscribe(address => {
      this.address = address;
    });
  }
  
  logout(): void {
    this.authService.logout();
  }
}
