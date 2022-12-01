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
    this.showBut=this.sign_inService1.Signedin;
    this.FirstName =this.sign_inService1.firstName ;
  }
 
  checkSignedin(){
    this.ngOnInit()
    console.log(this.showBut,this.FirstName,"hey")
  }



}
