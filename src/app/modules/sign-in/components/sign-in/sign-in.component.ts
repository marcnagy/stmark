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

  }
  submit(login: any){
    let rekt=login.form.controls;
    // console.log(login.form.controls);
  }
GetLoginData(nationalid:string,phone:any,Remembermeflag:string){
  if(nationalid.length==14 && phone.length==11 ) {
    
 this.SigninData.nationalid=nationalid;
this.SigninData.phonenumber=phone;
this.SigninData.RemembermeFlag=Remembermeflag;
if ((this.SigninData.RemembermeFlag) as unknown as boolean == true){
  console.log( "Eftekrounyyyyyyy")

}
console.log(this.SigninData) 
    
  }
  else{
   console.log("error")
  }


}

}
