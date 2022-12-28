import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { dynamicCodeModel } from '../models/dynamicCodeModel';


@Injectable({
  providedIn: 'root'
})
export class DynamicCode_inService {
  arabic:boolean=false
  dynamicData:dynamicCodeModel[]=[]
  dynamicDataAr:string[]=[]
  dynamicDataEn:string[]=[]
  datashown:string[]=[]
private url="dynamic_code";
  isAdmin:boolean=false;
  firstName:string='';
  id:string='';
  username:any;
  Signedin: boolean=false;
  constructor(private http:HttpClient) { }
  public getCode():Observable<dynamicCodeModel[]>{
  
    return this.http.get<dynamicCodeModel[]>(`${environment.apiUrl}/${this.url}`);

  }

  checklang(){
    this.getCode().subscribe((data)=>{this.dynamicData=data;
      for(let i=0;i<this.dynamicData.length;i++){
      
          this.dynamicDataAr[i]=this.dynamicData[i].description_arabic;
        this.dynamicDataEn[i]=this.dynamicData[i].description_english;
        
      }
    this.changelang();
    console.log(this.datashown);
    
  });
 
  
     }
  
     changelang(){
      if(this.arabic){
        this.datashown=this.dynamicDataAr
      }
      else{
        this.datashown=this.dynamicDataEn
  
      }
     }

     refreshnav(){
      let element: HTMLElement = document.getElementById("homenavbutton") as HTMLElement;
      element.click();
     }
     refreshslid(){
      let element: HTMLElement = document.getElementById("imp-reminder") as HTMLElement;
      element.click();
     }
     refreshfoot(){
      let element: HTMLElement = document.getElementById("reshreshHelper") as HTMLElement;
      element.click();
     }
  }
  
  
