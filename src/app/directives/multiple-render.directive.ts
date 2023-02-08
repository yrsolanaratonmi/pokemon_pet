/* eslint-disable import/named */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[multipleRender]',
})
export class MultipleRenderDirective {
  constructor(private readonly template: TemplateRef<any>, private container: ViewContainerRef) {}

  @Input('multipleRender') set multiple(context: any) {
    for (let i = 0; i < context; i++) {
      this.container.createEmbeddedView(this.template);
    }
  }
}
