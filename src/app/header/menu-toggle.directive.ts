import{ Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMenuToggle]'
})
export class MenuToggleDirective {
  @HostBinding('class.hidden') isHidden = false;

  @HostListener('click') toggleHidden() {
    this.isHidden = !this.isHidden;
  }
}
