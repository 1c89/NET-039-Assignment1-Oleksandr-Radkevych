import { Injectable } from '@angular/core';
import * as contentData from '../assets/data/contentdata.json'

@Injectable({
  providedIn: 'root'
})
export class ContentDataService {
private contentData:{[key:string]:any} ;

constructor() { 
  this.contentData = {...contentData} as const;
}
getSectionContent(section: string): any {
  return this.contentData[section];
}
}
