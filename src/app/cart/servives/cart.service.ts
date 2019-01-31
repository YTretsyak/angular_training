import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/Product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products:Array<Product> = new Array<Product>();
  length:number;
  constructor() { }

  ngOnInit(){
    this.products = new Array<Product>();
  }

  addProductToCart(product:Product){
    this.products.push(product);
  }

  getProducts(){
    return this.products;
  }

  getTotalPrice():number{
      let sum:number = 0;
      this.products.forEach(element => {
        sum += element.price;
      });
  
      return sum;
  }

  getCount():Observable<Array<Product>>{
    return of(this.products);
  }
  
  remove(product:Product){
    var index = this.products.findIndex(function(el){
      return el.name == product.name && el.price == product.price
    });
    this.products.splice(index,1);
  }
}
