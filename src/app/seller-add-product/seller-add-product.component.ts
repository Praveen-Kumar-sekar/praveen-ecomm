import { Component } from '@angular/core';
import { product } from '../data.type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMessage:string | undefined;
constructor(private product:ProductService){}

  submit(data:product){
    console.warn(data);
    this.product.addProduct(data).subscribe((result:any)=>{
      if(result){
        this.addProductMessage = 'Product is added successfully';
      }
    });


    setTimeout(()=>{
this.addProductMessage=undefined;
    },3000)

    
  }

}
