import { Pipe, PipeTransform } from '@angular/core';

import { LazhValidatorService } from '../lazh-validator.service';

@Pipe({
  name: 'lazhIsarray'
})
export class LazhIsarrayPipe implements PipeTransform {

  constructor(private validateService: LazhValidatorService) {}

  transform(value: any[], ...args: unknown[]): boolean {
    return this.validateService.IsArrayValid(value);
  }

}
