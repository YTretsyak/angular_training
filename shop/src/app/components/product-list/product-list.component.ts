import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
import { CartComponent } from '../cart/cart.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  public products:Array<Product>;
  constructor(private productsService:ProductsService,
    private cartComponent:CartComponent) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(products=>this.products = products)
  }

  onProductClick(product:Product){
    this.cartComponent.addProductToCart(product);
  }
}
