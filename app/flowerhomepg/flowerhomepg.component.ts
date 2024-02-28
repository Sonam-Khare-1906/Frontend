import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { FormGroup } from '@angular/forms';
import { Register } from '../product';


@Component({
  selector: 'app-flowerhomepg',
  templateUrl: './flowerhomepg.component.html',
  styleUrls: ['./flowerhomepg.component.css']
})
export class FlowerhomepgComponent {
  userdata: Object | undefined;
 

  
  register: Register = new Register();
  constructor(private router: Router,private route: ActivatedRoute,private toastr:ToastrService,
    private service:ApiService,private builder:FormBuilder) {} 


    loginform=this.builder.group({
      email:this.builder.control('',Validators.required),
      password:this.builder.control('',Validators.required),
      
    })
    
  getControl(name:any): AbstractControl | null{  //to control the errors for get function 
    return this.loginform.get(name)
  }



    proceedlogin(){

  this.service.Getbycode(this.loginform.value.email).subscribe(res=>{
  if(res==null || (res as Register).password != this.loginform.value.password){

    console.log("login failed");
    this.toastr.error('Invalid Credentials');
  }
  else{
    this.toastr.success('Login Successfully');
    this.userdata=res;
    // console.log(this.userdata);
    this.router.navigate(['productsview']);
  }

 });
  }
}




