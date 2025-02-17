import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrim]',
})
export class TrimDirective {
  constructor(private eleRef: ElementRef) {}

  @HostListener('blur')
  onBlur() {
    this.eleRef.nativeElement.value = this.eleRef.nativeElement.value.trim();
  }
}
