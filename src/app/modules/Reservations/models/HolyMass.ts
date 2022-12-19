import { Time } from "@angular/common";

export class HolyMass{
    Name?:string
    date:string|undefined; //the date used in reserve
    prayer:string|undefined;
    location:string|undefined; //the place used in reserve
    startTime:string|undefined; //the starttimr used in reserve
    endtime:string|undefined;
    capacity:number|undefined;
    cancellation?:boolean;
    
}