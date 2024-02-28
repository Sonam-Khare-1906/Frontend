import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
addProduct(productformData: FormData) {
  throw new Error('Method not implemented.');
} private baseURL= "http://localhost:8080/Register";
// private baseURL= "http://localhost:8080/Products"

//injected HttpClient in constructor
constructor(private httpClient: HttpClient) { }

//Angular makes use of observables as an interface to handle 
//a variety of common asynchronous operations like The HTTP module uses observables to handle AJAX requests and responses


// getProductList(): Observable<Products[]>
// {
  // get method request that interprets the body as JSON and returns the 
  //response body in a given type , here it is Employee list
  //get method return — An Observable of the HttpResponse, with a response body in the requested type.
//   return this.httpClient.get<Products[]>(`${this.baseURL}`);
// }

// public addProduct(product: FormData, headers: HttpHeaders) {
//   return this.httpClient.post<Products>(`${this.baseURL}/saveproduct`, product, { headers });
// }


// public addProduct(product:FormData)
// {
//   return this.httpClient.post<Products>(`${this.baseURL}/saveproduct`,product);
// }


// getProductById(id :number) : Observable<Products>{
//   return this.httpClient.get<Products>(`${this.baseURL}/${id}`);
// }


// updateProduct(id: number,product : Products) : Observable <Object>
// {
//   return this.httpClient.put(`${this.baseURL}/${id}`,product);
// }



// deleteProduct(id: number) : Observable<Object>
// {
//   return this.httpClient.delete(`${this.baseURL}/${id}`);
// }

 
}
