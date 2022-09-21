import {Component} from '@angular/core';
import {OutletPosition, ProductDetailOutlets, StorefrontOutlets} from "@spartacus/storefront";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'electronics-spa';
  // productDetailOutlets = ProductDetailOutlets;


  log(some: any) {
    console.log(some.product.price.formattedValue);
  }
}
