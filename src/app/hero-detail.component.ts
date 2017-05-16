export const heroDetail = {
  template: `
    <h2>Windstorm details!</h2>
    <div><label>id: </label>1</div>
  `,
  controller: function () {
  }
};

import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'hero-detail'
})
export class HeroDetailDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('heroDetail', elementRef, injector);
  }
}
