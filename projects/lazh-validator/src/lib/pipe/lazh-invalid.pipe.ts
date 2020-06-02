import { Pipe, PipeTransform } from '@angular/core';

import { LazhValidatorService } from '../services/lazh-validator.service';

/**
 * Pipe Used for Check Provided value is Invalid.
 *
 * To Use:
 *
 * `{{ 'value' | IsInvalid }}`
 *
 */
@Pipe({
  name: 'IsInvalid',
  pure: true
})
export class LazhInvalidPipe implements PipeTransform {

  constructor(private validateService: LazhValidatorService) { }

  /**
   * @param value data to check on transform
   * @returns boolean
   */
  transform(value: string | number | object): boolean {
    return this.validateService.IsInvalid(value);
  }

}
