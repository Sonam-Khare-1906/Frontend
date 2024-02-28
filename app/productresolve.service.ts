import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Products } from './product';
import { Observable, map, of } from 'rxjs';
import { ImageserviceService } from './imageservice.service';
import { ProductsserviceService } from './productsservice.service';

@Injectable({
  providedIn: 'root'
})
export class ProductresolveService implements Resolve<Products> {

  constructor(private productService: ProductsserviceService ,private imageService:ImageserviceService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<Products>  {
  const id= route.paramMap.get("pid");

  if(id){
    const productId = Number(id);
    //then we have to fetch details from backend
   return this.productService.getProductDetailsById(productId)
   .pipe(map(p=> this.imageService.createImage(p)));
  }else{
    //return empty observable
    return of(this.getProductDetails());
  }
  }

  getProductDetails(){
    return {
        pname: "",
        pid: 0,
        pprice: 0,
        pquantity: 0,
       productImages: [],
        pdescription: '',
      };
    
    }
  }
