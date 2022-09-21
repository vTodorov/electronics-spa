import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActiveCartService, Cart, CmsAddToCartComponent, Product, WishListService} from "@spartacus/core";
import {AddToCartComponent, CmsComponentData, CurrentProductService, ModalService} from "@spartacus/storefront";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-add-to-cart',
  templateUrl: './product-add-to-cart.component.html',
  styleUrls: ['./product-add-to-cart.component.scss']
})
export class ProductAddToCartComponent extends AddToCartComponent implements OnInit {
  product$: Observable<Product | null> = this.currentProductService.getProduct();

  constructor(
    public modalService: ModalService,
    public currentProductService: CurrentProductService,
    public cd: ChangeDetectorRef,
    public activeCartService: ActiveCartService,
    public component?: CmsComponentData<CmsAddToCartComponent>,
    public wishListService?: WishListService
  ) {
    super(modalService, currentProductService, cd, activeCartService, component)
  }

  ngOnInit(): void {
    this.product$.subscribe((pr: Product | null) => {
      if (pr?.code) {
        this.productCode = pr?.code;
      }
    });
  }
}
