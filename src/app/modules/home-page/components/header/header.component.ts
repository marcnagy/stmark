import { Component, OnInit } from '@angular/core';
import { SignInComponent } from 'src/app/modules/sign-in/components/sign-in/sign-in.component';
import { sign_inService } from 'src/app/modules/sign-in/services/person.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./_header.component.scss']
})
export class HeaderComponent implements OnInit {
  test:number=5;
  
  constructor( public sign_inService1:sign_inService ) { }
  showBut:boolean | undefined;
  FirstName :string | undefined ;

  ngOnInit(): void {
    const value =sessionStorage.getItem('isLogged')
    console.log(value+"the value in session")
    if (value !=null){
      this.sign_inService1.Signedin=true
      const rekt =sessionStorage.getItem('Username');
      this.sign_inService1.firstName=rekt as string;
      this.checkSignedin()
    } 
    else{
      this.checkSignedin();
    }

  }
 
  checkSignedin(){
    this.showBut=this.sign_inService1.Signedin;
    this.FirstName =this.sign_inService1.firstName ;
  }

  signout(){
    sessionStorage.clear();
    this.sign_inService1.Signedin=false;
    this.ngOnInit();
    
  
  }



}
