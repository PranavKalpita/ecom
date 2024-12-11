import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  register:boolean= false;

  user = {
    email: '',
    password: ''
  };

  newUser={
    name:'',
    phone:'',
    email:'',
    password:'',
    gender:'',
    address:'',
    city:'',
    role:'user'
  };

  userDetails: any = null;

  constructor(private dataService: DataService,private router: Router,private authService:AuthService) {}

  onViewUser(): void {
    this.dataService.viewUserDetails(this.user.email, this.user.password).subscribe({
      next: (response) => {
        console.log('User details fetched successfully:', response);
        this.userDetails = response; // Assign the response to userDetails
        
        this.authService.login(this.userDetails);
        
        if(this.userDetails.role=='admin')
          this.router.navigate(['/admin']);
        else if(this.userDetails.role=='seller')
          this.router.navigate(['/newproduct']);
        else
          this.router.navigate(['']);
      },
      error: (error) => {
        console.error('Error fetching user details:', error);
        alert('Invalid email or password. Please try again.');
        this.userDetails = null;
      }
    });
  }

  newUserButton(){
    if(this.register==false)
      this.register = true;
    else
      this.register = false;
  }

  onRegisterSuccess(): void{
    this.dataService.registerUser(this.newUser).subscribe({next:(response)=>{
      console.log('User register successfully:', response);
    },
    error:(error) =>{
      console.error('Error fetching user details:', error);
      alert('Invalid Details. Please try again.');
    }
  });
  }

  

}
