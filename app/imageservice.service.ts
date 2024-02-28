import { Injectable } from '@angular/core';
import { Products } from './product';
import { FileHandle } from './file-handle model';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {


  constructor(private sanitizer:DomSanitizer) { }


  public createImage(product: Products) {
    const productimages: any[] = product.
    productImages;
  
    if (productimages) { // Check if product.images is defined
      const productimagesTofileHandle: FileHandle[] = [];
  
      for (let i = 0; i < productimages.length; i++) {
        const imageFileData = productimages[i];
        const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
  
        const imageFile = new File([imageBlob], imageFileData.name, { type: imageFileData.type });
  
        const finalfilehandle: FileHandle = {
          file: imageFile,
          url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
        };
        productimagesTofileHandle.push(finalfilehandle);
      }
  
      product.productImages = productimagesTofileHandle;
    }
  
    return product;
  }
  
  public dataURItoBlob(picBytes: string ,imageType: any){
   const byteString=window.atob(picBytes);
   const arrayBuffer=new ArrayBuffer(byteString.length);
   const int8Array=new Uint8Array(arrayBuffer);

   for(let i=0;i<byteString.length;i++){
    int8Array[i]=byteString.charCodeAt(i);
   }

const blob=  new Blob([int8Array],{ type: imageType});
return blob;
  }
}

