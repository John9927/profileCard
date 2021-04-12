import { Directive } from '@angular/core';

@Directive({
  selector: '[appCard]',
  host: {
    '[style.background-color]': '"white"',
    '[style.width.px]': '"347"',
    '[style.height.px]':'"365"',
    '[style.position]':'"absolute"',
    '[style.border-radius.px]':'"10"',
    '[style.box-shadow]':'"0px 1px 10px rgb(0 0 0 / 30%"',
  }
})

export class CardDirective {

}
