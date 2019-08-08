import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ele: ElementRef) {
    let nativeEle = this.ele.nativeElement;
    nativeEle.addEventListener('mouseenter', e => {
      this.ele.nativeElement.style.backgroundColor = "#FFF"
    })
    nativeEle.addEventListener('mouseleave', e => {
      this.ele.nativeElement.style.backgroundColor = "#FFF"
    })
  }

}
