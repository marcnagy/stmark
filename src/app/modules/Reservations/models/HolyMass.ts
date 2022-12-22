import { Time } from "@angular/common";

export class HolyMass{
    holyMassID:number=0;
    Name?:string
    date:string=''; //the date used in reserve
    prayer:string|undefined;
    location:string=" "; //the place used in reserve
    startTime:string=" "; //the starttimE used in reserve
    endTime:string=" ";
    capacity:number=0;
    cancellation?:boolean;
    
}