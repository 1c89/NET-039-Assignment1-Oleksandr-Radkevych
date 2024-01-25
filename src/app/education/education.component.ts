import { Component, OnInit } from '@angular/core';
import { ContentDataService } from '../contentdata.service';
import { LayoutDataService } from '../layoutdata.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  contentData:any={} 
  layoutData:any={};
  
  constructor(private layoutDataService:LayoutDataService, private contentDataService:ContentDataService) { }

  ngOnInit() {
    this.contentData = this.contentDataService.getSectionContent("education").schools.map((edu:{degree:string,value:any}) => {return {company: edu.degree, ...edu}});
    this.layoutData = this.layoutDataService.getSectionParameters("education");


  }

}
