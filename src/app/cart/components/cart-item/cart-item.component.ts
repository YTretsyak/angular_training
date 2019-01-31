import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/products/models/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product:Product;
  @Output() removed = new EventEmitter<Product>();
  constructor() { }

  ngOnInit() {
  }

  remove(product:Product){
    this.removed.emit(product);
  }

}
