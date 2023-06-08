import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login, signUp } from '../data.type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
showLogin =false;
  ngOnInit(): void {
  this.seller.reloadSeller()
    
  }
constructor(private seller:SellerService){}

  signUp(data:signUp):void{
    this.seller.userSignUp(data); 
  }

  login(data:login):void{
    this.seller.userLogin(data)
  }
  openLogin(){
    this.showLogin=true;
  }
  openSignUp(){
    this.showLogin=false;
  }

}
