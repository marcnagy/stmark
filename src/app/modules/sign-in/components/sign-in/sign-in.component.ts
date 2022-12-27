import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { sign_inService } from '../../services/person.service';
import { SigninModel } from '../../models/signin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./_sign-in.component.scss']
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
                         alert("login Successfully");
                      if(person.firstName=="admin") { 
                      this.myrouter.navigate(['Admin']);
                      this.sign_inService1.isAdmin=true;
                      this.sign_inService1.Signedin=true;  
                        this.sign_inService1.firstName="Admin";
                      this.sign_inService1.refreshmypage()
                      sessionStorage.setItem('isAdmin',"true");
                      sessionStorage.setItem('isLogged',"true");
                      sessionStorage.setItem('Username',"Admin");   }
                    else{this.myrouter.navigate(['']);     
                       this.sign_inService1.Signedin=true;  
                       console.log(person.firstName)  ;
                       this.sign_inService1.firstName=person.firstName;
                       this.sign_inService1.id=person.id;
                       this.sign_inService1.refreshmypage()
                       sessionStorage.setItem('isLogged',"true")
                       sessionStorage.setItem('Username',person.firstName)  }         
         },
         (error) =>alert("id or phone number is incorrect")
       );
           
    }
    
    
    //   reloadCurrentRoute() {
    //     let currentUrl = this.myrouter.url;
    //     this.myrouter.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    //         this.myrouter.navigate([currentUrl]);
    //     });
    // }
}
