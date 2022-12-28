import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicCode_inService } from 'src/app/modules/dynamic-code/services/dynamicCodeService';
import { sign_inService } from 'src/app/modules/sign-in/services/person.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./_nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  datashown:string[]=[]

Alert(){
  alert("hey there")
}
  constructor(private myrouter:Router,private myservice:sign_inService, private dynamicCode:DynamicCode_inService ) { }

  ngOnInit(): void {
    this.dynamicCode.changelang();
    this.datashown=this.dynamicCode.datashown;
  }
// addimg(){
//   (document.getElementById("myheader") as HTMLInputElement).classList.add("addtheimg");
// }

GotoDonations(){
  if(this.myservice.Signedin ==false){
  alert("You need to be Logged in First Before Donating")
  }
  else{
    this.myrouter.navigate(['donation'])
  }
}
GotoReservations(){
  
    if(this.myservice.Signedin ==false){
    alert("You need to be Logged in First Before reserving")
    }
    else{
      this.myrouter.navigate(['reserve'])
    
}

}

}
