import { Time } from "@angular/common";

export class HolyMass{
    Name?:string
    day:string|undefined;
    prayer:string|undefined;
    place:string|undefined;
    altar:string|undefined;
    TimeSlot:string|undefined;
    starttime:string|undefined;
    endtime:string|undefined;
    AvailablePlaces:number|undefined;
    cancellation?:boolean;

    // date:string|undefined;
    // prayer:string|undefined;
    // location:string|undefined;
    // startTime:string|undefined;
    // endTime:string|undefined;
    // capacity:number|undefined;

    
}