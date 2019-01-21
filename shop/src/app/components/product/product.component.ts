import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;

  onClick(){
    console.log("The product was bought");
  }

  constructor() { }

  ngOnInit() {
  }
}

enum Category {
  Food = 1,
  Items
}
