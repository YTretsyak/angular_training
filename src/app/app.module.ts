import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductComponent } from './products/components/product/product.component';
import { ProductsModule } from './products/modules/products/products.module';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { CartItemComponent } from './cart/components/cart-item/cart-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlighterDirective } from './shared/directives/highlighter.directive'

@NgModule({
  declarations: [
    AppComponent,
    CartListComponent,
    CartItemComponent,
    HighlighterDirective
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
