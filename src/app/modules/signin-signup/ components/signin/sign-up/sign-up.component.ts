import { Component, OnInit } from '@angular/core';
import { signupuser } from '../../../models/Signup';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  User: signupuser = new signupuser;
  UserBinded :signupuser=new signupuser;
  constructor() { }

  ngOnInit(): void {
    console.log()
  }
  GetSignUpdata(nationalid:string,phone:string,first:string,second:string,adress:string,email:string){
this.User.Address=adress;
this.User.nationalid=nationalid;
this.User.Phonenum=phone;
this.User.firstname=first;
this.User.secondname=second
this.User.email=email
}
GetUserSignUpData(){
console.log(this.UserBinded)
}

}
