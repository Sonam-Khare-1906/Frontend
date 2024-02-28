import { Component, OnInit } from '@angular/core';
import {  AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import{ToastrService} from 'ngx-toastr';
import{ApiService} from '../api.service';
import { Register } from '../product';

@Component({
  selector: 'app-flower-registeration',
  templateUrl: './flower-registeration.component.html',
  styleUrls: ['./flower-registeration.component.css']
})
export class FlowerRegisterationComponent implements OnInit{
   integerRegex=/^\d+$/ //for integer pattern use  
   EmailRegex=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ //for email pattern
  title='reactive-form';


  register: Register = new Register();
  constructor(private router: Router,private route: ActivatedRoute,private toastr:ToastrService,
    private service:ApiService) {} 
  ngOnInit(): void {
 
  }
  

  registerForm=new FormGroup({
    firstname:new FormControl("",[Validators.required,Validators.maxLength(32)]),
    lastname:new FormControl("",[Validators.required,Validators.maxLength(32)]),
    age:new FormControl("",[Validators.required,Validators.max(60),Validators.min(18),Validators.pattern(this.integerRegex)]),
    mobileno:new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern(this.integerRegex)]),
    email:new FormControl("",[Validators.required,Validators.maxLength(60),Validators.pattern(this.EmailRegex)]),
    password:new FormControl("",[Validators.required,Validators.maxLength(20),Validators.minLength(8)]),
    confirmpassword:new FormControl("",[Validators.required,Validators.maxLength(20),Validators.minLength(8)]),
    address:new FormControl("",[Validators.required,Validators.maxLength(500),Validators.minLength(10)]),
    state:new FormControl("",[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
    city:new FormControl("",[Validators.required,Validators.maxLength(30),Validators.minLength(5)]),
  })

  getControl(name:any): AbstractControl | null{  //to control the errors for get function 
    return this.registerForm.get(name)
  }


  proceedregisteration(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      this.service.Proceedregister(this.registerForm.value).subscribe(()=>
        {
this.toastr.success('Registered Successfully');
this.router.navigate(['']);

        });

    }else{
      this.toastr.warning('Please enter valid data');
    }
  }
}
