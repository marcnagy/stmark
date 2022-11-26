import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderAnnouncComponent } from './components/slider-announc/slider-announc.component';
import { SwiperModule } from 'swiper/angular';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
    declarations:[
        HomeComponent,
        SliderComponent,
        SliderAnnouncComponent
    ],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        SwiperModule
    ]
})
export class HomePageModule{}