import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, map, pipe } from 'rxjs';
import { Products } from './product';
import { ProductsserviceService } from './productsservice.service';
import { ImageserviceService } from './imageservice.service';

@Injectable({
  providedIn: 'root'
})
export class BuyProductResolverService implements Resolve<Products[]>{

  constructor(private productservice:ProductsserviceService,private imageservice:ImageserviceService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Products[] | Observable<Products[]> | Promise<Products[]> {
  
    const id = route.paramMap.get("id"); 
    const isSingleProductCheckout = route.paramMap.get("isSingleProductCheckout") === 'true' ? 'true' : 'false'; // Convert boolean to string

  if (id !== null && id !== undefined) {
    return this.productservice.getProductDetails(isSingleProductCheckout, id)
      .pipe(
        map(
          (x: Products[], i) => x.map((product: Products) => this.imageservice.createImage(product))
        )
      );
  } else {
    // Handle the case when id is null or undefined (e.g., return an empty array, throw an error, etc.)
    return [];
  }
  
  }
}
