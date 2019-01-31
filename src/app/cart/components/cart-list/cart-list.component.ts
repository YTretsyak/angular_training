import { Component, OnInit } from '@angular/core';
import { CartService } from '../../servives/cart.service';
import { Product } from 'src/app/products/models/Product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  productsInCart:Array<Product>;
  length;
  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.productsInCart = this.cartService.getProducts();
    this.cartService.getCount().subscribe(length=>this.length=length)
  }

  onRemoved(product:Product){
    this.cartService.remove(product);
  }
}
