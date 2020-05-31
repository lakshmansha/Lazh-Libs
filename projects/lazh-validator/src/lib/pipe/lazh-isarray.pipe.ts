import { Pipe, PipeTransform } from '@angular/core';

import { LazhValidatorService } from '../services/lazh-validator.service';

@Pipe({
  name: 'lazhIsarray',
  pure: true
})
export class LazhIsarrayPipe implements PipeTransform {

  constructor(private validateService: LazhValidatorService) {}

  transform(value: any[]): boolean {
    return this.validateService.IsArrayValid(value);
  }

}
