import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Products } from '../product';
import { ProductsserviceService } from '../productsservice.service';
import { map } from 'rxjs';
import { ImageserviceService } from '../imageservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  @Input() product: any;
  data: any[] = [];
  searchTerm: string = ''; // Variable to hold the search term
  productDetails: Products[] | undefined;
  pageNumber: any;

  constructor(private api: ApiService, private http: HttpClient,private productservice:ProductsserviceService,private imageService:ImageserviceService,
    private router:Router
    ) {}

  ngOnInit() {
    // Fetch data from the JSON server initially
   // this.fetchData();
    this.getAllProducts();
  }


  searchByKeyword(searchKeyword: any):void{
 console.log(searchKeyword);
 this.pageNumber=0;
 this.productDetails=[];
 this.getAllProducts(searchKeyword);
  }


  public getAllProducts(searchKey: string = "") {
    this.productservice.getAllProducts(searchKey)
      .pipe(
        map((x: Products[], i) => x.map((product: Products) => this.imageService.createImage(product)))
      )
      .subscribe(
        (resp: Products[]) => {
          console.log(resp);
          this.productDetails = resp;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }
  

  showProductDetails(pid: any){
    this.router.navigate(['/products',{pid:pid}]);
  }

  addtocart(item: any) {
    this.api.addtocart(item);
  }

  removeitem(item: any) {
    this.api.removecartitem(item);
  }
}
 