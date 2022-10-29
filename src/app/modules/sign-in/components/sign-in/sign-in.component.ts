import { Component, OnInit } from '@angular/core';
import { person } from '../../model/person';
import { PersonService } from '../../services/person.service';
import { SigninModel } from '../../models/signin';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  title="sign in";
  personA:person[]=[];  SigninData: SigninModel = new SigninModel; 
  BindedSigninData :SigninModel = new SigninModel;
  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.personA=this.personService.getPerson();
    console.log(this.personA);
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
