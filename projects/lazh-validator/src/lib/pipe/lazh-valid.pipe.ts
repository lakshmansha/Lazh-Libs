import { Pipe, PipeTransform } from '@angular/core';

import { LazhValidatorService } from '../services/lazh-validator.service';

@Pipe({
  name: 'lazhValid',
  pure: true
})
export class LazhValidPipe implements PipeTransform {

  constructor(private validateService: LazhValidatorService) {}

  transform(value: string | number | object): boolean {
    return this.validateService.IsValid(value);
  }

}
