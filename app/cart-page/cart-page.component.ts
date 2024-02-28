import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Register } from '../product';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  showproduct:any=[];
  public totalAmount:number=0;
  public addressform= false;
  public taxamount:number=0;
  public finalamount:number=0;
  public sendamount:number=0;
  loginform: any;

  getControl(name:any): AbstractControl | null{  //to control the errors for get function 
    return this.loginform.get(name)
  }

  register: Register = new Register();
  constructor(private api:ApiService){

  }

  ngOnInit(): void {
  this.showproduct=this.api.products();
  console.log(this.showproduct);
  this.totalAmount=this.api.calculateprice();
  // console.log(this.totalAmount);

  //Calculation of 5% taxation
  this.taxamount=this.totalAmount/100*5;
   this.finalamount=this.totalAmount+this.taxamount;
    
  // console.log("Your Taxation Amount is :",this.taxamount);
  // console.log("Your Final Amount is :",this.finalamount);

  //sending final amount to order page
this.sendamount=this.finalamount;
this.api.sendfinalamount(this.sendamount);
}
  removeitem(item:any){
    this.api.removecartitem(item);
    this.totalAmount=this.api.calculateprice();
  }


  Empty(){
    this.api.removeallitems();
  }

  cancel(){
    this.addressform=false;
  }

}
