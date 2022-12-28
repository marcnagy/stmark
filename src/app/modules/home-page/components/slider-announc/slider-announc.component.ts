import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual, SwiperOptions } from 'swiper';
import { DynamicCode_inService } from 'src/app/modules/dynamic-code/services/dynamicCodeService';
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-slider-announc',
  templateUrl: './slider-announc.component.html',
  styleUrls: ['./slider-announc.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SliderAnnouncComponent implements OnInit {
  swiperConfig2:any;
  datashown:string[]=[]

  constructor(private dynamic : DynamicCode_inService) { }
  ngOnInit(): void {
    this.dynamic.checklang(); 
    this.datashown=this.dynamic.datashown;
    this.swiperConfig2={
      slidesPerView:2,  
      spaceBetween:100,
      loop:true,
      clickable:true,
    }
  }


}
