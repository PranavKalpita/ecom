import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormRecord } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userRegisterUrl = 'https://localhost:7275/api/User/register'; // User registration API
  private userVerifyUrl = 'https://localhost:7275/api/User/view';     //Fetching User Details
  private viewAllUserUrl = 'https://localhost:7275/api/User/viewall'; //Fetching All User Details
  private updateUserUrl = 'https://localhost:7275/api/User/update';
  private viewAllProductUrl = 'https://localhost:7275/api/Product/viewProduct'; //Fetching All Product
  private ProductRegisterUrl = 'https://localhost:7275/api/Product/savedata';

  constructor(private https: HttpClient) { }
  
  updateUserDetails(userData:any):Observable<any>{
    const formdata = new FormData();
    formdata.append('name',userData.name);
    formdata.append('email',userData.email);
    formdata.append('phone',userData.phone);
    formdata.append('password',userData.password);
    formdata.append('gender',userData.gender);
    formdata.append('address',userData.address);
    formdata.append('city',userData.city);
    formdata.append('role',userData.role);
    return this.https.put(this.updateUserUrl, formdata);
  }

  GetUserDetails(id:any):Observable<any>{
    const params = new HttpParams()
    return this.https.get(this.updateUserUrl, { params });
  }

  viewAllUserDetails(): Observable<any>{
    return this.https.get(this.viewAllUserUrl);
  }
  


  registerUser(userData:any): Observable<any> {
    const formdata = new FormData();
    formdata.append('name',userData.name);
    formdata.append('email',userData.email);
    formdata.append('phone',userData.phone);
    formdata.append('password',userData.password);
    formdata.append('gender',userData.gender);
    formdata.append('address',userData.address);
    formdata.append('city',userData.city);
    formdata.append('role',userData.role);

    return this.https.post(this.userRegisterUrl, formdata);
  }

  viewUserDetails(email: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.https.get(this.userVerifyUrl, { params });
  }
  
  viewAllProductDetails(): Observable<any>{
    return this.https.get(this.viewAllProductUrl);
  }

  registerProduct(productData: any): Observable<any> {
    const formData = new FormData();

    // Append form fields
    formData.append('name', productData.name);
    formData.append('description', productData.description);
    formData.append('category', productData.category);
    formData.append('unit', productData.unit);
    formData.append('price', productData.price.toString());
    formData.append('quantity', productData.quantity.toString());
    formData.append('time', productData.time);
    formData.append('sellerId', productData.sellerId);

    // Append the image file
    if (productData.imageFile) {
        formData.append('imageFile', productData.imageFile, productData.imageFile.name);
    }

    // Post the form data to the backend
    return this.https.post(this.ProductRegisterUrl, formData);
}

}
