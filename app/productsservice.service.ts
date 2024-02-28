import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from './product';
import { Observable } from 'rxjs';
import { OrderDetails } from './order-details.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsserviceService {
  updateProduct(pid: number, productformData: FormData) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }

  public addProduct(product:FormData) {
    return this.httpClient.post<Products>("http://localhost:8080/addNewProduct",product);
  }

  public getAllProducts(searchKeyword: String =" ") {
    return this.httpClient.get<Products[]>("http://localhost:8080/getAllProducts"+"?searchKey="+searchKeyword);
  }

  public deleteProduct(pid: number){
    return this.httpClient.delete<Products[]>("http://localhost:8080/deleteProductDetails/" + pid);
  }
  
  public getProductDetailsById(pid:number){
    return this.httpClient.get<Products>("http://localhost:8080/getProductDetailsById/"+ pid);
  }

  public getProductDetails(isSingleProductCheckout: string,pid: any){
    return this.httpClient.get<Products[]>("http://localhost:8080/getProductDetails/"+isSingleProductCheckout+"/"+pid);
  }


  public placeOrder(orderDetails: OrderDetails){
    return this.httpClient.post("http://localhost:8080/placeOrder",orderDetails);
  }

  public addToCart(pid:any){
    return this.httpClient.get("http://localhost:8080/addToCart/"+pid);
  }
}
