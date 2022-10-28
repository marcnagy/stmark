import { Component, OnInit } from '@angular/core';
import { SigninModel } from '../../models/signin';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  SigninData: SigninModel = new SigninModel; 
  constructor() { }

  ngOnInit(): void {
    this.SigninData.nationalid = ((<HTMLInputElement>document.getElementById("NationalId")).value)
    console.log(this.SigninData.nationalid)
  }
GetLoginData(nationalid:string,phone:any,Remembermeflag:string){
this.SigninData.nationalid=nationalid;
this.SigninData.phonenumber=phone;
this.SigninData.RemembermeFlag=Remembermeflag;
console.log( this.SigninData)
}

}
