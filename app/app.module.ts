import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowerhomepgComponent } from './flowerhomepg/flowerhomepg.component';
import { FlowerRegisterationComponent } from './flower-registeration/flower-registeration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HeaderComponent } from './header/header.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FooterComponent } from './footer/footer.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { materialmodule } from './materialmodule';
import{ToastrModule} from 'ngx-toastr';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { ApiService } from './api.service';
import { FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { LoginUsersComponent } from './login-users/login-users.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { DragDirective } from './drag.directive';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { ShowproductimagesComponent } from './showproductimages/showproductimages.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';






@NgModule({
  declarations: [
    AppComponent,
    FlowerhomepgComponent,
    FlowerRegisterationComponent,
    ProductViewComponent,
    ProductDetailComponent,
    HeaderComponent,
    CartPageComponent,
    FooterComponent,
    OrderPageComponent,
    UserlistingComponent,
    AdminDashboardComponent,
    CustomerServiceComponent,
    LoginUsersComponent,
    AddNewProductComponent,
    DragDirective,
    ShowproductComponent,
    ShowproductimagesComponent,
    BuyProductComponent,
    AboutusComponent,
    ContactComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    materialmodule,
    ToastrModule.forRoot(),
    FormsModule,
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
