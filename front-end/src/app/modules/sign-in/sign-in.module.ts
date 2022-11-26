import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SigninRoutingModule } from './sign-in-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        SignInComponent

    ],
    imports:[
        CommonModule,
        FormsModule,
        SigninRoutingModule


    ]

})
export class SigninModule{}