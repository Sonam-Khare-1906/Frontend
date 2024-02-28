import { Component } from '@angular/core';
import { Register } from '../product';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.css']
})
export class CustomerServiceComponent {
  userdata: Object | undefined;
  constructor(private router: Router,private route: ActivatedRoute,private toastr:ToastrService,
    private service:ApiService,private builder:FormBuilder) {} 


  register: Register = new Register();
  loginform=this.builder.group({
    email:this.builder.control('',Validators.required),
  })
     
  getControl(name:any): AbstractControl | null{  //to control the errors for get function 
    return this.loginform.get(name)
  }
  proceedlogin(){
    this.service.Getbycode(this.loginform.value.email).subscribe(res=>{
    if(res==null || (res as Register).email != this.loginform.value.email){
  
      console.log("login failed");
      this.toastr.error('Invalid Email');
    }
    else{
      this.toastr.success('Your Service is Reached Succefully');
      this.userdata=res;
      // console.log(this.userdata);
      this.router.navigate(['']);
    }
  
   });
  }

}
