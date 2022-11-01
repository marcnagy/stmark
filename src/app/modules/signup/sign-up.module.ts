import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SignUpComponent } from './components/signin/sign-up/sign-up.component';
import { SignUpRoutingModule } from './sign-up-routing.module';


import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        SignUpComponent

    ],
    imports:[
        CommonModule,
        FormsModule,
        SignUpRoutingModule


    ]

})
export class SignUpModule{}