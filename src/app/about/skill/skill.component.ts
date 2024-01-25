import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() skillData:any;
  orderedSkills:any[][] = [];
  constructor() { }
  
  ngOnInit() {
    for(let i=0; i<this.skillData.length; i+=2)
    {
      this.orderedSkills.push(this.skillData.slice(i,i+2))
    }
    
  }

}
