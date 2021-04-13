import { Directive, ElementRef, Host, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appGrid]'
})
export class GridDirective {
  @Input() gap: string;
  @HostBinding('style.gap') grid: string;

  @Input() gridTemplateColumns: string;
  @HostBinding('style.grid-template-columns') gridColumns: string;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.classGrid();
  }

  classGrid() {
    this.grid = this.gap;
    this.gridColumns = this.gridTemplateColumns;

    this.elementRef.nativeElement.style.display = 'grid';
  }
}
