import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() defaultHighlightColor: string = 'transparent';
  @Input() highlightColor: string = '#ff4d4f';
  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultHighlightColor;

  ngOnInit(): void {
    this.backgroundColor = this.defaultHighlightColor;
  }

  constructor(private eleRef: ElementRef, private render: Renderer2) {}

  @HostListener('mouseenter')
  mouseEnter(event: MouseEvent) {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseLeave(event: MouseEvent) {
    this.backgroundColor = this.defaultHighlightColor;
  }
}
