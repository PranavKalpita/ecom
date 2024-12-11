import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ecom',
  templateUrl: './ecom.component.html',
  styleUrls: ['./ecom.component.css']
})
export class EcomComponent implements OnInit{
  
  products:any[]=[];

  constructor(private dataService: DataService){}
  ngOnInit(): void {
    this.viewAllproduct();
 }

  viewAllproduct():void{
    this.dataService. viewAllProductDetails().subscribe({
      next:(response)=>{
         this.products = response;
      },
      error:(error)=>{
        console.log("Error Fetching users ",error);
      }
    });
}

}
