import { Component, OnInit } from '@angular/core';
import { LayoutDataService } from '../layoutdata.service';
import { ContentDataService } from '../contentdata.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contentData:any;
  layoutData:any;

  constructor(private layoutDataService:LayoutDataService, private contentDataService:ContentDataService) { }

  ngOnInit() {
    this.contentData = this.contentDataService.getSectionContent("personal");
    this.layoutData = this.layoutDataService.getSectionParameters("contacts");
  }


}
