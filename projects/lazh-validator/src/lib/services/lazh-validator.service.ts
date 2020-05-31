import { Injectable } from '@angular/core';

/**
 * Service to Validate Various Data based on DataType.
 *
 * **Every Function Check provided Value is Validate**.
 */
@Injectable({
  providedIn: 'root'
})
export class LazhValidatorService {

  /**
   *
   * @param value user provided data.
   * @returns If Valid 'true' Else 'false'.
   * @description Check Is provided value is Valid.
   *
   * For every type checks value !== null & undefined.
   *
   * Additional Check for type as below:
   *
   * 1. **string** Type checks value !== '' & 'null'.
   * 2. **number** Type checks value > 0.
   * 3. **object** Type checks value does have Properties'.
   *
   */
  IsValid(value: string | number | object) {
    let valid = false;

    if (value === null || value === undefined) {
      valid = false;
    }

    if (!valid) {
      if (typeof value === 'string') {
        if (value !== null && value !== undefined && value !== '' && value !== 'null') {
          valid = true;
        }
      } else if (typeof value === 'number') {
        if (value !== null && value !== undefined && value > 0) {
          valid = true;
        }
      } else if (typeof value === 'object') {
        if (value !== null && value !== undefined) {
          if (Object.keys(value).length > 0) {
            valid = true;
          }
        }
      }
    }

    return valid;
  }

  /**
   *
   * @param value user provided data.
   * @returns If Invalid 'true' Else 'false'.
   * @description Check Is provided value is Invalid.
   *
   * For every type checks value === null or undefined.
   *
   * Additional Check for type as below:
   * 1. **string** Type checks value === '' & 'null'.
   * 2. **number** Type checks value === 0.
   * 3. **object** Type checks value don't have Properties'..
   */
  IsInvalid(value: string | number | object) {
    let valid = false;

    if (value === null || value === undefined) {
      valid = true;
    }

    if (!valid) {
      if (typeof value === 'string') {
        if (value === null || value === undefined || value === '' || value === 'null') {
          valid = true;
        }
      } else if (typeof value === 'number') {
        if (value === null || value === undefined || value === 0) {
          valid = true;
        }
      } else if (typeof value === 'object') {
        if (value === null || value === undefined) {
          if (Object.keys(value).length === 0) {
            valid = true;
          }
        }
      }
    }

    return valid;
  }

  /**
   *
   * @param value provided array value.
   * @returns If Valid 'true' Else 'false'.
   * @description Check Is provided Array is Valid.
   *
   * Checks for value !== null,  undefined & does have Values.
   *
   */
  IsArrayValid(value: any[]) {
    let valid = false;

    if (value !== null && value !== undefined) {
      if (value.length > 0) {
        valid = true;
      }
    }

    return valid;
  }

  /**
   *
   * @param value user passed value.
   * @returns If Valid 'true' Else 'false'.
   * @description Check Is provided valid is Defined.
   *
   * Checks for value !== null & undefined.
   *
   */
  IsDefined(value: any) {
    let valid = false;

    if (value !== null && value !== undefined) {
      valid = true;
    }

    return valid;
  }

  /**
   *
   * @param value user passed value.
   * @returns If Valid 'true' Else 'false'.
   * @description Check Is provided Date is Defined & Valid.
   *
   * Checks for value === 'object Date' & !isNaN.
   *
   */
  IsDateValid(value: any) {
    let valid = false;

    if (value && Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value)) {
      valid = true;
    }

    return valid;
  }

}
