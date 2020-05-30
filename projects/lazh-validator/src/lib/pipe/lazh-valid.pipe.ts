import { Pipe, PipeTransform } from '@angular/core';

import { LazhValidatorService } from '../lazh-validator.service';

@Pipe({
  name: 'lazhValid'
})
export class LazhValidPipe implements PipeTransform {

  constructor(private validateService: LazhValidatorService) {}

  transform(value: string | number | object, ...args: unknown[]): boolean {
    return this.validateService.IsValid(value);
  }

}
