import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
import { FlowerRegisterationComponent } from './flower-registeration/flower-registeration.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FlowerhomepgComponent } from './flowerhomepg/flowerhomepg.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { LoginUsersComponent } from './login-users/login-users.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { AuthguardService } from './authguard.service';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { ProductresolveService } from './productresolve.service';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { BuyProductResolverService } from './buy-product-resolver.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: 'products', component: ProductDetailComponent, resolve: { product: ProductresolveService } },
  { path: 'productsview', component: ProductViewComponent },
  { path: 'REGISTERATION', component: FlowerRegisterationComponent },
  { path: '', component: FlowerhomepgComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'Add-product', component: AddNewProductComponent },
  { path: 'service', component: CustomerServiceComponent },
  { path: 'login', component: LoginUsersComponent },
  {
    path: 'addNewProduct', component: AddNewProductComponent, resolve: {
      product: ProductresolveService
    }
  },
  // this line is added when i can add the authentication canActivate: [AuthguardService],data:{roles:['Admin']}},
  { path: 'showProductDetails', component: ShowproductComponent },
  {
    path: 'buyProduct', component: BuyProductComponent, resolve: {
      productDetails: BuyProductResolverService
    }
  },
  {
    path: 'orderpage',
    component: OrderPageComponent
  },
  {
    path:'aboutus',component:AboutusComponent
  },{
    path:'contact',component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function goBack(this: any) {
  this.router.navigate([ProductViewComponent]);
}

