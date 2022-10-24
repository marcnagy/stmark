import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './modules/home-page/components/slider/slider.component';
import { NavBarComponent } from './modules/home-page/components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
