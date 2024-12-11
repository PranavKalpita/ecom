import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewproductComponent } from './newproduct/newproduct.component';
import { LoginComponent } from './login/login.component';
import { EcomComponent } from './ecom/ecom.component';
import { AdminpageComponent } from './adminpage/adminpage.component';


const routes:Routes=[
  {path:'',component:EcomComponent},
  {path:'newproduct',component:NewproductComponent},
  {path:'login',component:LoginComponent},
  {path:'newproduct',component:NewproductComponent},
  {path:'admin',component:AdminpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
 
}
