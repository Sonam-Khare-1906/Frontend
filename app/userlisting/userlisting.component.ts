import { Component } from '@angular/core';
import { Register } from '../product';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {

  register:Register[]=[];
  data: any;
  
  constructor(private router:Router,private http:HttpClient,private Register:ApiService)
  {}
//   ngOnInit(): void {
//    let response= this.http.get("http://localhost:8080/Register");
//    response.subscribe((data)=>this.data=data);
//    console.log(this.data);


//   }
//   private getRegister()
//   {
//     //using subscribe method we handle the responsedata
//      this.Register.getuserlist().subscribe((data: Register[]) =>{
//       this.register = data;
         
//      })
// }
// updateuser(id : number)
// {
//  this.router.navigate(['update',id]);
// }

// deleteuser(id: number)
// {
//   this.register.deleteuser(id).subscribe((data: any)=>
//     {
//     console.log(data);
//     this.getRegister();
// })
//}
// userDetails(id: number)
// {
//    this.router.navigate(['view-product',id]);
// }

 }
