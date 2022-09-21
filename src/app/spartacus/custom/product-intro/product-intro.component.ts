import {Component, OnInit} from '@angular/core';
import {CurrentProductService} from "@spartacus/storefront";
import {Observable} from "rxjs";
import {Product} from "@spartacus/core";

@Component({
  selector: 'app-product-intro',
  templateUrl: './product-intro.component.html',
  styleUrls: ['./product-intro.component.scss']
})
export class ProductIntroComponent implements OnInit {
  product$: Observable<Product | null> = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) {
  }

  ngOnInit(): void {
  }
}
