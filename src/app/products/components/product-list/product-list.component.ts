import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {Product} from 'src/app/products/models/Product';
import { CartService } from 'src/app/cart/servives/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Array<Product> = this.productService.getProducts();

  constructor(private productService:ProductService, private cartService:CartService) { }

  ngOnInit() {
  }

  onBuy(product:Product){
    console.log(product.name);
    this.cartService.addProductToCart(new Product(product.name,product.price,product.description));
  }
}
