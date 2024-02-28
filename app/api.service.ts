import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Products, Register } from './product';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  proceedlogin(value: any) {
    throw new Error('Method not implemented.');
  }

  public cartitemlist:any=[];
  public amount:number=0;
  public productlist=new BehaviorSubject<number>(0)
  public existingProductIndex:number=0;

  constructor(private http:HttpClient) { }
   apiurl='http://localhost:8080/Register';
  //  apiurl='http://localhost:8080/Products';

  GetAll(){
    return this.http.get(this.apiurl);
  }

  Getbycode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }

  getuserlist(){
    return this.http.get<Register[]>("register.data")
  
  }

  //post method
  Proceedregister(inputdata:any){
    return this.http.post(this.apiurl,inputdata);
  }

  updateregister(code:any,inputdata:any){
    return this.http.put(this.apiurl,+'/'+code,inputdata);
  }




  
  addtocart(data:Products){
    const existingProductIndex = this.cartitemlist.findIndex((a: any) => data.pid == a.pid);
  console.log(existingProductIndex);
  if (existingProductIndex != -1) {
    this.cartitemlist[existingProductIndex].pquantity += 1;
    // this.productlist.next(this.cartitemlist);
    this.productlist.next(this.productlist.getValue()+1);
    // count = this.cartitemlist[existingProductIndex].quantity;
    // console.log(count);
  } else {
    data.pquantity=1;
    this.cartitemlist.push(data);
    // this.productlist.next(this.cartitemlist);
    this.productlist.next(this.productlist.getValue()+1);
  }
    // this.cartitemlist.push(data);
    // this.productlist.next(this.cartitemlist);
    console.log(this.cartitemlist)
  }
  products():Products{
   //console.log(this.productlist);
    return this.cartitemlist;
  
  }

  numproduct():BehaviorSubject<number>{
    return this.productlist;
  }



  removecartitem(product: any) {
    console.log("services"+product);
    this.cartitemlist.map((a: any, index: any) => {
      if (product.pid === a.pid) {
        this.cartitemlist.splice(index, 1);
      }
    })
    this.productlist.next(this.cartitemlist);
  }
  
  //total Calculator
  calculateprice(): number {
    let total = 0;
    this.cartitemlist.map((a: any) => {
      total += a.pprice*a.pquantity;
    })
    return total;
  }


  //cart items count
  productinsidecart(product:any):number{
    let count:number=0;
     this.cartitemlist.map((a: any, index: any) => {
      if (product.pid === a.pid) {
        count++;
      }
    });
return count;
  }


//remove all items
removeallitems(){
  console.log(this.cartitemlist);
  this.cartitemlist=[];
  this.productlist.next(this.cartitemlist)
}

//passing data from one component to another component
sendfinalamount(data:number){
  this.amount=data;
}

receivefinalamount(){
  return this.amount;
}

}
