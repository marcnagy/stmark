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
  @Output() CreatedUsers = new EventEmitter<signupuser[]>();
  constructor(private sign_UpService1:sign_UpService,private myrouter:Router) { }
  persons: signupuser[]=[];
  ngOnInit(): void {
   this.sign_UpService1.getPerson().subscribe((result: signupuser[])=>(this.persons=result));
  }
 
Authenticate(){
  let x:signupuser
  let checker:boolean=false;
  for(x  of (this.persons)){
      if(x.id==this.UserBinded.id)
      {alert("NationalID is already in use "+ x.id)
        checker=true;
        break;}
    }
    if(checker==false){
      this.CreateUser(this.User);
      alert("Signup Successfully")
      this.myrouter.navigate(["/SignIn"])
    }
}


    

CreateUser(user:signupuser){
  this.sign_UpService1
  .CreateUser(user)
  .subscribe((Users:signupuser[]) => this.CreatedUsers.emit(Users));

}
GetUserSignUpData(login:any){
console.log(this.UserBinded)
// console.log(login.value);
// this.User=login.value;
// console.log(this.User)
this.Authenticate();

}

}
