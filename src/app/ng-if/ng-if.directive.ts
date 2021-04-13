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
      this.viewContainer.createEmbeddedView(this.templateRef); //Qui non fa altro che associare la proprietà templateRef al metodo createEmbeddedView
    } else {
      this.viewContainer.clear(); //In questo caso ha distrutto la vista da questo Container
    }
  }
}
