import { Component, OnInit } from '@angular/core';
import { sign_inService } from '../../services/person.service';
import { SigninModel } from '../../models/signin';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  title="signin.ui";
  personA:SigninModel[]=[]; 
   SigninData: SigninModel = new SigninModel; 
  BindedSigninData :SigninModel = new SigninModel;
  constructor(private sign_inService1:sign_inService) { }

  ngOnInit(): void {
    this.sign_inService1.getPerson().subscribe((result:SigninModel[])=>(this.personA=result));
  }
  submit(login: any){
    console.log(this.BindedSigninData)

    let rekt=login.form.controls;
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
