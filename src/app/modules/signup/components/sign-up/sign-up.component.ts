import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { signupuser } from '../../models/Signup';
import { sign_UpService } from '../../services/person.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./_sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  User: signupuser = new signupuser;
  UserBinded :signupuser =new signupuser;
  constructor(private sign_UpService1:sign_UpService,private myrouter:Router) { }
  persons: signupuser[]=[];
  ngOnInit(): void {
   this.sign_UpService1.getPerson().subscribe((result: signupuser[])=>(this.persons=result));
  }
 
GetUserSignUpData(login:any){
  let x:signupuser;
  let checker:boolean=false;
this.User=login.value;
for(x  of (this.persons)){
  console.log(this.User)
  if(x.id==this.UserBinded.id)
  {alert("National ID is already in use "+ x.id)
    checker=true;
    break;}
    if(x.phonenumber==this.UserBinded.phonenumber)
    {alert("Phone number is already in use "+ x.phonenumber)
      checker=true;
      break;}
}
if(checker==false){
  this.sign_UpService1.CreateUser(this.UserBinded).subscribe()
  alert("Signup Successfully")
  this.myrouter.navigate(["/SignIn"])
}
}

}
