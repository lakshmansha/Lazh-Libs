import { Pipe, PipeTransform } from '@angular/core';

import { LazhValidatorService } from '../services/lazh-validator.service';

/**
 * Pipe Used for Check Provided value is IsArray.
 *
 * To Use:
 *
 * `{{ array[] | IsArray }}`
 *
 */
@Pipe({
  name: 'IsArray',
  pure: true
})
export class LazhIsarrayPipe implements PipeTransform {

  constructor(private validateService: LazhValidatorService) {}

  /**
   * @param value data to check on transform
   * @returns boolean
   */
  transform(value: any[]): boolean {
    return this.validateService.IsArrayValid(value);
  }

}
