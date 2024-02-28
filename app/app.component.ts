import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Project_1';
  ngOnInit() {
  //  this.productService.getProductList().subscribe((res) => {console.log(res)})

  }

constructor() { }
  

}
