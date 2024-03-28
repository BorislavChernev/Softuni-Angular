import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appImageLink]'
})
export class ImageLinkDirective implements Validator {
  @Input() imageLink: string | undefined;

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
      console.log(this.imageLink);
      
      
      return null;
    }
}
