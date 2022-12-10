import { Time } from "@angular/common";

export class HolyMass{
    Name?:string
    day:string|undefined;
    prayer:string|undefined;
    place:string|undefined;
    altar:string|undefined;
    starttime:string|undefined;
    endtime:string|undefined;
    AvailablePlaces:number|undefined;
    cancellation?:boolean;
    
}