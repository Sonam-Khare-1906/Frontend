import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {


  constructor(private service:ApiService,private router:Router,private toastr:ToastrService) { 
 }
}