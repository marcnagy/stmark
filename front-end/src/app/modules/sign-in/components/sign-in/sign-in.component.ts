import { Component, Input, OnInit } from '@angular/core';
import { sign_inService } from '../../services/person.service';
import { SigninModel } from '../../models/signin';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  title="signin.ui";
  persons: SigninModel[]=[];
  SigninData: SigninModel = new SigninModel; 
  SigninBinded: SigninModel = new SigninModel;
  constructor(private sign_inService1:sign_inService , private myrouter:Router) { }

  ngOnInit(): void { 
    this.sign_inService1.getPerson().subscribe((result: SigninModel[])=>(this.persons=result));
    
   }
  submit(login:any){
    this.SigninData=login.value;
    console.log("this sign in data")
     console.log(this.persons) ;
     let x:SigninModel;
     let checker:boolean=false;
         for(x of (this.persons))
         {
           if(x.id==this.SigninData.id){
             if(x.phonenumber==this.SigninData.phonenumber){
               
               alert("login Successfully")
               checker=true;
               this.myrouter.navigate([""]);
               this.sign_inService1.Signedin=checker;
               this.sign_inService1.FirstName=x.id;
               break;
             }
             else{
               alert("Incorrect Phone Number")
             }
           }
         }
         if(checker==false){
           alert("Incorrect National Id")
         }
  }
 
GetLoginData(id:string,phone:string,Remembermeflag:boolean){
  if(id.length==14 && phone.length==11 ) {
    
 this.SigninData.id=id;
this.SigninData.phonenumber=phone;
this.SigninData.RemembermeFlag=Remembermeflag;
if ((this.SigninData.RemembermeFlag) as unknown as boolean == true){
  console.log( "Remember flag on")

}
else{
  console.log("Remember flag off")
 }
console.log(this.SigninData) ;
let x:SigninModel;
let checker:boolean=false;
    for(x of (this.persons))
    {
      if(x.id==id){
        if(x.phonenumber==phone){
          
          alert("login Successfully")
          checker=true;
          this.myrouter.navigate([""]);
          this.sign_inService1.Signedin=checker;
          this.sign_inService1.FirstName=x.id;
          break;
        }
        else{
          alert("Incorrect Phone Number")
        }
      }
    }
    if(checker==false){
      alert("Incorrect National Id")
    }
  }
}

}
