import { Injectable } from '@angular/core';
import * as layoutData from '../assets/data/layoutdata.json'

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
  private layoutData:any[]=[];
  
  constructor() 
  { 
    //this.websiteStructure = structData;
    this.layoutData = Array.from(layoutData);
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
