import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from 'src/app/products/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product : Product;
  @Output() bougth = new EventEmitter<Product>();
  editable:Boolean = false;
  price:Number;

  constructor() { }

  ngOnInit() {
  }

  buy(product:Product){
    this.bougth.emit(product);
  }

  enableEdit(){
    if(this.editable)
    {
      this.editable = false;
    }
    else
    {
      this.editable = true;
    }
  }
}
