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
 person:SigninModel=new SigninModel;
  title="signin.ui";
  SigninData: SigninModel = new SigninModel; 
  SigninBinded: SigninModel = new SigninModel;
  constructor(private sign_inService1:sign_inService , private myrouter:Router) { }

  ngOnInit(): void { 
   }
  submit(login:any){
    this.SigninData=login.value;
    this.sign_inService1.getPerson(this.SigninData.id,this.SigninData.phonenumber).subscribe( (person)=>{
          alert("login Successfully")
                       this.myrouter.navigate([""]);          
                       this.sign_inService1.Signedin=true;    
                       console.log(person.firstName)  
                       this.sign_inService1.firstName=this.person.firstName;
                      
         },
         (error) =>alert("id or phone number is incorrect")
       );
      }
}
