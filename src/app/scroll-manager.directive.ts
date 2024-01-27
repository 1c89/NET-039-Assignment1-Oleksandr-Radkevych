import { Directive } from '@angular/core';
import { ScrollSection } from './scroll-section.directive';

@Directive({
  selector: '[appScrollManager]'
})
export class ScrollManager {
  private sections = new Map<string | number,ScrollSection>();
  
  constructor() { 
   }

  addSection(section:ScrollSection){
    this.sections.set(section.id, section);
  }

  delSection(section:ScrollSection)
  {
    this.sections.delete(section.id);
  }
  scrollToSection(id:string|number){
    return this.sections.get(id)!.scroll();
  }

}
