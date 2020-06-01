import { Pipe, PipeTransform } from '@angular/core';

import { LazhValidatorService } from '../services/lazh-validator.service';

/**
 * Pipe Used for Check Provided value is IsValid.
 *
 * To Use:
 *
 * `{{ 'value' | lazhValid }}`
 *
 */
@Pipe({
  name: 'lazhValid',
  pure: true
})
export class LazhValidPipe implements PipeTransform {

  constructor(private validateService: LazhValidatorService) {}

  /**
   * @param value data to check on transform
   * @returns boolean
   */
  transform(value: string | number | object): boolean {
    return this.validateService.IsValid(value);
  }

}
