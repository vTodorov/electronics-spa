import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {
  BannerModule,
  GenericLinkModule,
  MediaModule,
  OutletRefModule,
} from "@spartacus/storefront";
import {RouterModule} from "@angular/router";
import {ProductIntroComponent} from './product-intro/product-intro.component';
import {CmsConfig, ConfigModule, I18nModule} from "@spartacus/core";
import {ProductAddToCartComponent} from './product-add-to-cart/product-add-to-cart.component';
import {PriceComponent} from './price/price.component';
import { CustomSliderComponent } from './custom-slider/custom-slider.component';
import {SwiperModule} from "swiper/angular";

@NgModule({
  declarations: [
    HeaderComponent,
    ProductIntroComponent,
    ProductAddToCartComponent,
    PriceComponent,
    CustomSliderComponent
  ],
  exports: [
    HeaderComponent,
    CustomSliderComponent
  ],
  imports: [
    CommonModule,
    OutletRefModule,
    RouterModule,
    ConfigModule.withConfig({
      cmsComponents: {
        ProductIntroComponent: {
          component: ProductIntroComponent
        },
        ProductSummaryComponent: false,
        ProductAddToCartComponent: {
          component: ProductAddToCartComponent
        },
        AddToWishListComponent: false,
      },
    } as CmsConfig),
    I18nModule,
    SwiperModule,
    GenericLinkModule,
    MediaModule,
    BannerModule,
  ],
})
export class CustomModule {
}
