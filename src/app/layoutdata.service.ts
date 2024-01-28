import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError,throwError, BehaviorSubject, find, take, filter, switchMap, of, EMPTY, delay } from 'rxjs';
import * as layoutData from '../assets/data/layoutdata.json'

export interface INavBarItem {
  isNav:boolean,
  link:string,
  icon:string
}
export interface ILayout {
  section: string;
  title: string;
  navigation: INavBarItem
  className:string;
}

@Injectable({
  providedIn: 'root'
})

export class LayoutDataService {
  //private layoutData = new Array<ILayout>();
  private layoutJSONPath = '../assets/data/layoutdata.json';
  private layoutData:ILayout[] = Array<ILayout>(); //new Array<ILayout>();
  constructor() 
  { 
    //this.websiteStructure = structData;
    this.layoutData = Array.from(layoutData) as ILayout[];
    console.log(typeof(this.layoutData));
  }
  
  
  getSectionParameters(section: string): ILayout {
    
    const emptyLayout = {} as ILayout;

    const item = this.layoutData.find(item => item.section === section);
    if (!item) {
      console.error(`Item with section '${section}' not found.`);
      return emptyLayout;
    }
    
    return item;;
  }

  getNavigationBarParameters() :ILayout[]
  {
  
    return this.layoutData.filter((p)=>p.navigation.isNav);

  }

  getAllParameters(): ILayout[] {
    return this.layoutData;
  }
}
