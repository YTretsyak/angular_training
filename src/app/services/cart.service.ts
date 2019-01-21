import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productsInCart:Array<Product> = [];
  constructor() { }

  addToCart(product:Product){
    this.productsInCart.push(product);
  };

  getProducts() :Observable<Product[]>{
    return of(this.productsInCart);
  }

  removeAll(){
    this.productsInCart.length = 0;
  }
}
