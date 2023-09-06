import { Directive, EventEmitter, Input, Output , HostBinding , HostListener} from '@angular/core';


  @Directive({
    selector: '[appProp]'
  })

  export class PropDirective {
    @Output('action') action = new EventEmitter<any>();
    @HostBinding('attr.maxlength') max: number = 10;
    @HostBinding('attr.minlength') min: number = 3;
    constructor() {}
    @HostListener('keyup', ['$event.target.value'])
    onTyping(data: any) {
    if (data.length < this.min) {
    this.action.emit(`Enter atleast ${this.min} character`);
    } else if (data.length >= this.min && data.length < this.max) {
    this.action.emit('');
    } else {
    this.action.emit(`Reached max char limit of ${this.max} characters`);
    }
    }
    }