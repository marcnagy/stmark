import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './modules/home-page/components/slider/slider.component';
import { NavBarComponent } from './modules/home-page/components/nav-bar/nav-bar.component';
import { HeaderComponent } from './modules/home-page/components/header/header.component';
import { SliderAnnouncComponent } from './modules/home-page/components/slider-announc/slider-announc.component';
import { FooterComponent } from './modules/home-page/components/footer/footer.component';
import { SignInComponent } from './modules/sign-in/components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavBarComponent,
    HeaderComponent,
    SliderAnnouncComponent,
    FooterComponent,
    SignInComponent
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
