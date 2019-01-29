import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ProductComponent } from '../../components/product/product.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProductComponent,ProductListComponent],
  providers:[ProductService],
  exports:[ProductComponent, ProductListComponent]
})
export class ProductsModule { }
