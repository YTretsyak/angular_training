import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:Array<Product> = 
  [
    new Product("Product1","Frist product description",10),
    new Product("Product2","Second product description",10),
    new Product("Product2","Third product description",10)
  ];
  constructor() { };
  getProducts(): Observable<Product[]>{
    return of(this.products);
  };
}
