import { Component, OnInit } from '@angular/core';
import { DynamicCode_inService } from 'src/app/modules/dynamic-code/services/dynamicCodeService';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./_about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
constructor(private dynamic : DynamicCode_inService){

}
datashown:string[]=[]

  ngOnInit(): void {
    this.dynamic.changelang();
    this.datashown=this.dynamic.datashown;
  }

}
