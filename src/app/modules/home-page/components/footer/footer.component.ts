import { Component, OnInit } from '@angular/core';
import { DynamicCode_inService } from 'src/app/modules/dynamic-code/services/dynamicCodeService';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./_footer.component.scss']
})
export class FooterComponent implements OnInit {
  datashown:string[]=[]


  constructor(private dynamicCode:DynamicCode_inService) { }

  ngOnInit(): void {
    this.dynamicCode.changelang();
    this.datashown=this.dynamicCode.datashown;
  }

}
