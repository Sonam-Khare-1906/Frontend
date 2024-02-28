import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public cartitems:number=0;
  
  constructor(private api:ApiService,private router:Router,private toastr:ToastrService){}
  ngOnInit(): void {
   this.api.numproduct().subscribe((res)=>{
    this.cartitems=res;
   })
  }

  logout(){
    this.router.navigate(['/']);
    this.toastr.success("Logout Successfully");   
  }
}
