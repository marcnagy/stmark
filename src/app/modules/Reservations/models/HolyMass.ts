import { Time } from "@angular/common";

export class HolyMass{
    constructor(){
        this.holyMassID=0;
        this.date=''; //the date used in reserve
        this.location=""; //the place used in reserve
        this.startTime='' //the starttimE used in reserve
        this.endTime="";
        this.capacity=0;
    }
    holyMassID:number=0;
    Name?:string
    date:string=''; //the date used in reserve
    location:string=""; //the place used in reserve
    startTime:string; //the starttimE used in reserve
    endTime:string=" End Time";
    capacity:number;
    
}