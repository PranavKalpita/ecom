import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit{
  users:any[]=[];
  
  userDetails: any = null;

 constructor(private dataService: DataService){}
 
 ngOnInit(): void {
    this.viewAlluser();
 }
 
 viewAlluser():void{
      this.dataService.viewAllUserDetails().subscribe({
        next:(response)=>{
           this.users = response;
        },
        error:(error)=>{
          console.log("Error Fetching users ",error);
        }
      });
 }

 updateUser(id:number):void{
  this.dataService.GetUserDetails(id).subscribe({
    next:(response)=>{
       this.userDetails = response;
    },
    error:(error)=>{
      console.log("Error Fetching users ",error);
    }
  });
 }

 updateUserD():void{

 }

 deleteUser(id:number):void{

 }
}
