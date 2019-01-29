import { Injectable } from '@angular/core';
import {Product} from 'src/app/products/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts():Array<Product>{
    var response = new Array<Product>();
    response.push(new Product("Prod1",12,"test description"));

    return response;
  }
}
