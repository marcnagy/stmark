import { Component, OnInit } from '@angular/core';

import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
