import { Component, OnInit } from '@angular/core';
import { ContentDataService } from '../contentdata.service';
import { LayoutDataService } from '../layoutdata.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  contentData:any={};
  layoutData:any={};
  constructor(private layoutDataService:LayoutDataService, private contentDataService:ContentDataService) { }

  ngOnInit() {
    this.layoutData = this.layoutDataService.getSectionParameters("service");
    this.contentData = this.contentDataService.getSectionContent("service");
  }

}
