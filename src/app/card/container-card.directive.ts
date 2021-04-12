import { Directive } from '@angular/core';

@Directive({
  selector: '[appContainerCard]',
  host: {
    '[style.height.vh]':'"100"',
    '[style.position]':'"relative"',
    '[style.justify-content]':'"center"',
    '[style.align-items]':'"center"',
    '[style.display]':'"flex"',
  }
})
export class ContainerCardDirective {

}
