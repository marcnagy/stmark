import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { signupuser } from '../../models/Signup';
import { sign_UpService } from '../../services/person.service';
import { Router } from '@angular/router';
import { DynamicCode_inService } from 'src/app/modules/dynamic-code/services/dynamicCodeService';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./_sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  datashown:string[]=[]
  User: signupuser = new signupuser;
  UserBinded :signupuser =new signupuser;
  constructor(private sign_UpService1:sign_UpService,private myrouter:Router,private dynamicCode:DynamicCode_inService) { }
  persons: signupuser[]=[];
  ngOnInit(): void {
    this.dynamicCode.changelang();
    this.datashown=this.dynamicCode.datashown;
   this.sign_UpService1.getPerson().subscribe((result: signupuser[])=>(this.persons=result));
  }
 
GetUserSignUpData(login:any){
  let x:signupuser;
  let checker:boolean=false;
  this.User=login.value;

console.log(this.User,login.valid);
//login code
if(login.valid==true){
  for(x  of (this.persons)){
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

else{
  alert("please fill all the fields correctly")

}

}

}
