import { Injectable } from '@angular/core';
import * as structData from '../assets/data/layoutdata.json'

export interface Declaration {
  section: string;
  title: string;
  navigation:{isNav:boolean,link:string,icon:string}
  className:string;
}

@Injectable({
  providedIn: 'root'
})

export class LayoutDataService {
  private layoutData:any[]=[
    {"section":"header", "title":"Home", "navigation":{"isNav":true,"link":"#header","icon":"fa-home"}, "className":""},
    {"section":"about", "title":"About", "navigation":{"isNav":true,"link":"#about","icon":"fa-address-card"}, "className":""},
    {"section":"education", "title":"Education","navigation":{"isNav":false,"link":"","icon":""}, "className":"edu-col"},
    {"section":"experience", "title":"Experience", "navigation":{"isNav":true,"link":"#experience","icon":"fa-star"}, "className":"exp-col"},
    {"section":"service", "title":"Service", "navigation":{"isNav":true,"link":"#service","icon":"fa-tasks"}, "className":"srv-col"},
    {"section":"portfolio", "title":"Portfolio", "navigation":{"isNav":true,"link":"#portfolio","icon":"fa-file-archive"}, "className":""},
    {"section":"review","title":"Review","navigation":{"isNav":false,"link":"","icon":""}, "className":"" },
    {"section":"contacts","title":"Contacts", "navigation":{"isNav":true,"link":"#contact","icon":"fa-envelope","className":""}}
];
  
  constructor() 
  { 
    //this.websiteStructure = structData;
    console.log(typeof(this.layoutData));
  }
  
  
  getSectionParameters(section: string): any {
    return this.layoutData.find((item) => item.section === section);
  }

  getNavigationBarParameters() 
  {
  
    return this.layoutData.filter((p)=>p.navigation.isNav);

  }

  getAllParameters(): any[] {
    return this.layoutData;
  }

}
