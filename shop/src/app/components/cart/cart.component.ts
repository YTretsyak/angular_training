import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsInCart:Array<Product>;
  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.cartService.getProducts().subscribe(products=>this.productsInCart = products);
  }

  addProductToCart (product:Product) {
    this.cartService.addToCart(product);
  }

  clearCart () {
    this.cartService.removeAll();
  }
}
