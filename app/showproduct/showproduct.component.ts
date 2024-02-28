import { Component, OnInit } from '@angular/core';
import { ProductsserviceService } from '../productsservice.service';
import { Products } from '../product';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ShowproductimagesComponent } from '../showproductimages/showproductimages.component';
import { ImageserviceService } from '../imageservice.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})

  export class ShowproductComponent implements OnInit {
    productDetails: Products[] = [];
    displayedColumns: string[] = ['Id', 'Product Name', 'Description', 'Product Price', 'Product Quantity', 'Actions'];
  



  constructor(private productsService: ProductsserviceService,public  imageDialog:MatDialog,
    private imageService:ImageserviceService,private toastr: ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts(searchKeyword: string="") {
    this.productsService.getAllProducts(searchKeyword)
    .pipe(
      map((x:Products[], i)=>x.map((product: Products)=>this.imageService.createImage(product)))
      )
    .subscribe(
      (resp: Products[]) => {
        console.log(resp);
        this.productDetails=resp;
       
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }



  searchByKeyword(searchKeyword:any){
    console.log(searchKeyword);
    this.productDetails=[];
    this.getAllProducts(searchKeyword);

  }
  deleteProduct(pid: any){
    this.productsService.deleteProduct(pid).subscribe(
      (resp)=>{
        this.getAllProducts();
        this.toastr.success('Product Deleted successfully!', 'Success');
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
   
  showimages(product: Products){
    console.log(product);
    this.imageDialog.open(ShowproductimagesComponent, {data:{
      images:product.
      productImages
      
    },
      height:'300px',width:'500px'});
  }

  editProductDetails(pid: any){
    this.router.navigate(['/addNewProduct',{pid}]);
    console.log(pid);
    
  }
}


