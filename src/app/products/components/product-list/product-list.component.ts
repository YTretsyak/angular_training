import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {Product} from 'src/app/products/models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Array<Product>;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
