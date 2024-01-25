import { Component, OnInit } from '@angular/core';
import { LayoutDataService } from '../layoutdata.service';
import { ContentDataService } from '../contentdata.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  contentData:any={};
  layoutData:any={};
  filter_selected:string = 'All';

  constructor(private layoutDataService:LayoutDataService, private contentDataService:ContentDataService) { }

  ngOnInit() {
    this.contentData = this.contentDataService.getSectionContent("portfolio");
    this.layoutData = this.layoutDataService.getSectionParameters("portfolio");
  }

  getDomains(){

    let a = this.contentData.gallery.reduce((arr:string[], item:any)=>{
      const key = item.domain;

      if (!arr.includes(key)) {
          arr.push(key);
      }  
      return arr
}     ,[])
    return ['All',...(this.contentData.gallery.reduce((set:any, item:any) => set.add(item.domain), new Set()))]

  }

  onFilterClick(filter:string)
  {
    this.filter_selected =  filter;
  }

  getFilteredGallery()
  {
    return this.contentData.gallery.filter((item:any)=>  this.filter_selected === 'All' ? true: item.domain === this.filter_selected);
  }
}
