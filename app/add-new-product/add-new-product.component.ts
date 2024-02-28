import { Component, OnInit } from '@angular/core';
import { Products} from '../product';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse} from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../file-handle model';
import { ProductsserviceService } from '../productsservice.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})

export class AddNewProductComponent implements OnInit{
  isNewProduct=true;

  product:Products={
    pname: "",
    pid: 0,
    pprice: 0,
    pquantity: 0,
   productImages
: [],
    pdescription: ''
  }


  constructor(private productsService:ProductsserviceService,private sanitizier:DomSanitizer,
    private activatedRoute:ActivatedRoute, private toastr: ToastrService){

  }
  ngOnInit(): void {
   this.product= this.activatedRoute.snapshot.data['product'];

   if(this.product && this.product.pid){
    this.isNewProduct=false;
   }
  }
  addProduct(productForm: NgForm) {
    const productformData = this.prepareFormData(this.product);

    this.productsService.addProduct(productformData).subscribe(
      (response: Products) => {
         productForm.reset();
         this.toastr.success('Product added successfully!', 'Success');
         console.log(response);
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Failed to add product. Please try again.', 'Error');
         console.log(error);
      }
   );
   
  }
       prepareFormData(product: Products):FormData{
        const formData =new FormData();

        formData.append('products',
        new Blob([JSON.stringify(product)],{type:'application/json'}));
        if (product.
          productImages
          && product.
          productImages
          .length) {
          for (var i = 0; i < product.
            productImages
            .length; i++) {
            formData.append('imagesFile', product.
            productImages
            [i].file, product.
            productImages
            [i].file.name);
          }
        }
        
        
      return formData;
      }

  onFileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];
  
      const fileHandle: FileHandle = {
        file: file,//it is actual file upload
        url: this.sanitizier.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }

      this.product.
      productImages
      .push(fileHandle);
    }
  }

  removeImages(i:number){
this.product.
productImages
.splice(i, 1);
  }
  
}

 


