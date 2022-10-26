import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './modules/home-page/components/slider/slider.component';
import { NavBarComponent } from './modules/home-page/components/nav-bar/nav-bar.component';
import { HeaderComponent } from './modules/home-page/components/header/header.component';
import { FooterComponent } from './modules/home-page/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent
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
