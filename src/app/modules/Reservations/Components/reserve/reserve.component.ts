import { Component, OnInit } from '@angular/core';
import { ConfessionData } from '../../models/Confession';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./_reserve.component.scss']
})
export class ReserveComponent implements OnInit {
id:string="Confession";
test:ConfessionData = new ConfessionData;
oldConfessions:ConfessionData[]=[];

  constructor() { }

  ngOnInit(): void {
    (document.getElementById("myheader") as HTMLInputElement).classList.add("addtheimg");

  }
  GetConfessionData(login:any){
  console.log(this.test);
  this.oldConfessions.push(login.value);
  }

  ChangeTab( id:any){
    (document.getElementById("Confession") as HTMLInputElement).classList.remove("active");
    (document.getElementById("HolyMass") as HTMLInputElement).classList.remove("active");
    this.id=id;
    (document.getElementById(id) as HTMLInputElement).classList.add("active")
  }

}
