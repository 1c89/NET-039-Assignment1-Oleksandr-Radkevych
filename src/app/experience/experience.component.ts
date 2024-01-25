import { Component, OnInit } from '@angular/core';
import { ContentDataService } from '../contentdata.service';
import { LayoutDataService } from '../layoutdata.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  layoutData:any={};
  contentData:any={};
  
  constructor(private layoutDataService:LayoutDataService, private contentDataService:ContentDataService) { 

  }

  ngOnInit() {
      this.layoutData = this.layoutDataService.getSectionParameters("experience");
      this.contentData = this.contentDataService.getSectionContent("experience");

  }

}
