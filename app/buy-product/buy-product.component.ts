import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderDetails } from '../order-details.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Products } from '../product';
import { ProductsserviceService } from '../productsservice.service';
import { filter } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

  productDetails:Products[]=[];

orderDetails:OrderDetails={
  fullName: '',
  fullAddress:'',
  contactNumber: '',
  alternateContactNumber: '',
  orderProductQuantityList:[] 
}

constructor(private activateRoute:ActivatedRoute,
  private productservice:ProductsserviceService,private router:Router,private toastr:ToastrService){}



  ngOnInit(): void {
    this.productDetails= this.activateRoute.snapshot.data['productDetails'];
 
    this.productDetails.forEach(
     x=>this.orderDetails.orderProductQuantityList?.push(
       {
         pid: x.pid, quantity: 1,
       }
     )
     );
    console.log(this.productDetails)
    console.log(this.orderDetails);
   }
 

//Place Order
  public placeOrder(orderForm:NgForm){
   this.productservice.placeOrder(this.orderDetails).subscribe(
    (resp)=>{
      console.log(resp)
      orderForm.reset();
      this.router.navigate(["orderpage"]);

    },
    (err)=>{
      console.log(err);
    }
   );
  }


  getQuantityForProduct(pid: any) {
    const filteredProduct = this.orderDetails.orderProductQuantityList?.filter(
      (pquantity) => pquantity.pid === pid
    );
  
    // Check if filteredProduct is not undefined and not empty
    if (filteredProduct && filteredProduct.length > 0) {
      return filteredProduct[0].quantity || 0; // Ensure quantity is not undefined
    }
  
    return 0; // Return a default value if filteredProduct is undefined or empty
  }
  


  getCalculatedTotal(pid: number | undefined, pprice: number | undefined): number {
    const filteredProduct = this.orderDetails.orderProductQuantityList?.filter(
      (productQuantity) => productQuantity.pid === pid
    );
  
    // Check if filteredProduct is not undefined and not empty
    if (filteredProduct && filteredProduct.length > 0) {
      return (filteredProduct[0].quantity || 0) * (pprice || 0); // Ensure both quantity and pprice are not undefined
    }
  
    return 0; // Return a default value if filteredProduct is undefined or empty
  }
  
  


  // OnQuantityChanged calculator
  onQuantityChanged(pid: number | undefined, q: number | undefined) {
    console.log('onQuantityChanged called', pid, q);
  
    if (this.orderDetails.orderProductQuantityList) {
      const productIndex = this.orderDetails.orderProductQuantityList.findIndex(
        (orderProduct) => orderProduct.pid === pid
      );
  
      if (productIndex !== -1) {
        this.orderDetails.orderProductQuantityList[productIndex].quantity = q || 0;
        console.log('Quantity updated:', this.orderDetails.orderProductQuantityList);
      }
    }
  }
  
  getCalculatedGrandTotal() {
  let grandTotal = 0;
  this.orderDetails.orderProductQuantityList?.forEach((productQuantity) => {
    const price = this.productDetails.filter(product => product.pid === productQuantity.pid)[0]?.pprice || 0;
    grandTotal = grandTotal + price * (productQuantity.quantity || 0); // Ensure productQuantity.quantity is defined
  });
  return grandTotal;
}


logout(){
  this.router.navigate(['/orderpage']);
  this.toastr.success("Order Placed Successfully");   
}

  }