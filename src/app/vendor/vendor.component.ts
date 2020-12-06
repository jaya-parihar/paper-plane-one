import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth/Services/auth-service.service'


@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  constructor(private router:Router,
    private authService: AuthServiceService) {
      this.isLogin = authService.isVendorLogin;
    }

  ngOnInit(): void {
  }

  actionCall(action:string):void{
    console.log(action);
    if(action == "login")
    {
      this.router.navigateByUrl("/vendor/auth/login");
    }
    else
    {
      this.router.navigateByUrl("/vendor/auth/register");
    }
  }

  isLogin: boolean = this.authService.isVendorLogin;

}
