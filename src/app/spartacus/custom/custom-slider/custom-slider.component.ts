import { ViewEncapsulation } from '@angular/core';
import {Component, OnInit} from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {Navigation, Pagination} from "swiper";
import { OutletPosition} from "@spartacus/storefront";
import {CmsBannerComponent, CmsService, ImageGroup, Occ} from "@spartacus/core";
import Image = Occ.Image;

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

@Component({
  selector: 'custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomSliderComponent implements OnInit {
  position = OutletPosition;
  data:CmsBannerComponent|null = null;

  constructor(private cmsService: CmsService) {
  }

  ngOnInit(): void {
    this.cmsService.getComponentData('ElectronicsHompageSplashBannerComponent').subscribe((data:CmsBannerComponent|null)=>{
     this.data = data;
     console.log(this.data);
    })
  }

  getImage(data: any): Image | ImageGroup | undefined {
    if (data.media) {
      if ('url' in data.media) {
        return data.media as Image;
      } else {
        return data.media as ImageGroup;
      }
    }
    return ;
  }

}
