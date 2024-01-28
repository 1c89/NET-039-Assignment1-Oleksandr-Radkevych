import { Component, OnInit } from '@angular/core';
import { LayoutDataService } from '../layoutdata.service';
import { ContentDataService } from '../contentdata.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  personalData:any={};
  contentData:any={};
  layoutData:any={};

  
  constructor(private layoutDataService:LayoutDataService, private contentDataService:ContentDataService) { 
  
  }

  ngOnInit() {
    const sectionName = "header";
   
       
    this.contentData = this.contentDataService.getSectionContent(sectionName);
    this.personalData = this.contentDataService.getSectionContent("personal");
    
    this.layoutData = this.layoutDataService.getSectionParameters(sectionName);
  }

}
