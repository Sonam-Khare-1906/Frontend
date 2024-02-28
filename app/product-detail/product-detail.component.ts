import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Products } from '../product';
import { ProductsserviceService } from '../productsservice.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  activatedRoute: any;
   product: Products | undefined; 
 // Inject Router
showadd:boolean=true;           //add to cart button
showremove:boolean=false;       //remove button
selectedProductIndex=0;
  api: any;

  goBack() {
    console.log('Button clicked');
    this.router.navigate(["products"]);  // Navigate to the desired route
  }
  constructor(private router: Router, private route: ActivatedRoute, private productservice:ProductsserviceService,
    private Apiservice:ApiService) {}

  ngOnInit(): void {
    this.product = this.route.snapshot.data['product'];
    console.log(this.product);
  }

  // addToCart(pid:any){
  // this.productservice.addToCart(pid).subscribe(
  //   (response)=>{
  //     console.log(response);
  //   },(error)=>{
  //  console.log(error);
  //   }
  //   );
    
  // }

  addcart(pid: any){
    this.showadd=false;
    this.showremove=true;
    this.Apiservice.addtocart(pid);
  }
  removeitem(pid: any){
    console.log(pid);
    this.showadd=true;
    if(this.Apiservice.productinsidecart(pid)==0)
    this.showremove=false;
    this.Apiservice.removecartitem(pid);
  }


  changeIndex(index: number){
    this.selectedProductIndex=index;
  }

  buyProduct(pid:any){
    this.router.navigate(['/buyProduct',{
      isSingleProductCheckout: true,id:pid
    }]
    );
  }
}
