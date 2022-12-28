import { Component, OnInit } from '@angular/core';
import { SignInComponent } from 'src/app/modules/sign-in/components/sign-in/sign-in.component';
import { sign_inService } from 'src/app/modules/sign-in/services/person.service';
import { Router } from '@angular/router';
import { DynamicCode_inService } from 'src/app/modules/dynamic-code/services/dynamicCodeService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./_header.component.scss']
})
export class HeaderComponent implements OnInit {
  test:number=5;
  datashown:string[]=[]

  constructor( public sign_inService1:sign_inService , private myrouter:Router , private dynamic : DynamicCode_inService) { }
  showBut:boolean | undefined;
  FirstName :string | undefined ;

  ngOnInit(): void {
    this.dynamic.changelang();
    this.datashown=this.dynamic.datashown;
 
    const isadmin =sessionStorage.getItem('isAdmin')
    if(isadmin=="true"){
      this.sign_inService1.isAdmin=true
      this.sign_inService1.firstName="Admin";

    }
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
  remove(){
    (document.getElementById("myheader") as HTMLInputElement).classList.remove("addtheimg");

  }
 
  checkSignedin(){
    this.showBut=this.sign_inService1.Signedin;
    this.FirstName =this.sign_inService1.firstName ;
  }

  signout(){
    sessionStorage.clear();
    this.sign_inService1.Signedin=false;
    this.ngOnInit();
    this.myrouter.navigate([''])
  }
 changetoeng(){
  this.dynamic.arabic=false;
  this.ngOnInit()
  this.dynamic.checklang()
  this.dynamic.refreshnav()
  this.dynamic.refreshslid()
  this.myrouter.navigate([''])

  
 }
 changetoar(){
  this.dynamic.arabic=true
  this.ngOnInit()
  this.dynamic.checklang()
  this.dynamic.refreshnav()
  this.dynamic.refreshslid()
  this.myrouter.navigate([''])

 }



}
