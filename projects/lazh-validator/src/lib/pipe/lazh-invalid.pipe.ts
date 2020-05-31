import { Pipe, PipeTransform } from '@angular/core';

import { LazhValidatorService } from '../services/lazh-validator.service';

@Pipe({
  name: 'lazhInvalid',
  pure: true
})
export class LazhInvalidPipe implements PipeTransform {

  constructor(private validateService: LazhValidatorService) {}

  transform(value: string | number | object, ...args: unknown[]): boolean {
    return this.validateService.IsInvalid(value);
  }

}
