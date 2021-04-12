import { Directive, DoCheck, ElementRef, Input, KeyValueChanges, KeyValueDiffer, KeyValueDiffers, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNgstyle]'
})
export class NgstyleDirective implements DoCheck{
  private _ngStyle: {[key: string]: string}|null = null;
  private _differ: KeyValueDiffer<string, string|number>|null = null;

  constructor(private _ngEl: ElementRef, private _differs: KeyValueDiffers, private _renderer: Renderer2) {}

  @Input('appNgstyle')
  set ngStyle(values: {[klass: string]: any}|null) {
    this._ngStyle = values;
    if (!this._differ && values) {
      this._differ = this._differs.find(values).create();
    }
  }

  ngDoCheck() {
    if (this._differ) {
      const changes = this._differ.diff(this._ngStyle!);
      if (changes) {
        this._applyChanges(changes);
      }
    }
  }

  private _setStyle(nameAndUnit: string, value: string|number|null|undefined): void {
    const [name, unit] = nameAndUnit.split('.');
    value = value != null && unit ? `${value}${unit}` : value;

    if (value != null) {
      this._renderer.setStyle(this._ngEl.nativeElement, name, value as string);
    } else {
      this._renderer.removeStyle(this._ngEl.nativeElement, name);
    }
  }

  private _applyChanges(changes: KeyValueChanges<string, string|number>): void {
    changes.forEachRemovedItem((record) => this._setStyle(record.key, null));
    changes.forEachAddedItem((record) => this._setStyle(record.key, record.currentValue));
    changes.forEachChangedItem((record) => this._setStyle(record.key, record.currentValue));
  }
}
