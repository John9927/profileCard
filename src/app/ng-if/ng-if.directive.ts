import { Directive, ViewContainerRef, TemplateRef, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[AppNgIf]'
})
export class NgIfDirective {

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  @Input()
  set AppNgIf(val) {
    if(val) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
