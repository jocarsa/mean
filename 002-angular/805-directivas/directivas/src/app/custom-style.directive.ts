import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.color = 'green';
    this.elementRef.nativeElement.style.fontWeight = 'normal';
    this.elementRef.nativeElement.style.fontSize = '40px';
    this.elementRef.nativeElement.style.fontFamily = 'sans-serif';
    
  }
}