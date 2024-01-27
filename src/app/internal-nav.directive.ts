import { Directive,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInternalNav]'
})
export class InternalNavDirective {

  constructor(private renderer: Renderer2) {}

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      this.renderer.setProperty(document.documentElement, 'scrollTop', element.offsetTop);
    }
  }
}
