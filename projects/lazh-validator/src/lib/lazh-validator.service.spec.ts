import { TestBed } from '@angular/core/testing';

import { ILazhObject, LazhObjects } from './testing';

import { LazhValidatorService } from './lazh-validator.service';


describe('Lazh Validator Service Tests', () => {
  let service: LazhValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazhValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //#region IsValid Function Testing

  describe('IsValid Function', () => {

    it(`should able to validate if value is NULL`, () => {
      expect(service.IsValid(null)).toEqual(false);
    });

    it(`should able to validate if value is Undefined`, () => {
      expect(service.IsValid(undefined)).toEqual(false);
    });

    it(`should able to validate if value is '' `, () => {
      expect(service.IsValid('')).toEqual(false);
    });

    it(`should able to validate if value is'null'`, () => {
      expect(service.IsValid('null')).toEqual(false);
    });

    it(`should able to validate if value is 'Test'`, () => {
      expect(service.IsValid('Test')).toEqual(true);
    });

    it(`should able to validate if value of '0' `, () => {
      expect(service.IsValid(0)).toEqual(false);
    });

    it(`should able to validate if value is valid`, () => {
      expect(service.IsValid(5)).toEqual(true);
    });

    it(`should able to validate if valid is Invalid Object`, () => {
      const objValue = {} as ILazhObject;

      expect(service.IsValid(objValue)).toEqual(false);
    });

    it(`should able to validate if valid is Valid Object`, () => {
      const objValue = {} as ILazhObject;
      objValue.id = 1;
      objValue.name = 'IsValid';

      expect(service.IsValid(objValue)).toEqual(true);
    });

  });

  //#endregion

  //#region IsValid Function Testing

  describe('IsInvalid Function', () => {

    it(`should able to validate if value is NULL`, () => {
      expect(service.IsInvalid(null)).toEqual(true);
    });

    it(`should able to validate if value is Undefined`, () => {
      expect(service.IsInvalid(undefined)).toEqual(true);
    });

    it(`should able to validate if value is '' `, () => {
      expect(service.IsInvalid('')).toEqual(true);
    });

    it(`should able to validate if value is'null'`, () => {
      expect(service.IsInvalid('null')).toEqual(true);
    });

    it(`should able to validate if value is 'Test'`, () => {
      expect(service.IsInvalid('Test')).toEqual(false);
    });

    it(`should able to validate if value of '0' `, () => {
      expect(service.IsInvalid(0)).toEqual(true);
    });

    it(`should able to validate if value is valid`, () => {
      expect(service.IsInvalid(5)).toEqual(false);
    });

    it(`should able to validate if valid is Invalid Object`, () => {
      const objValue = {} as ILazhObject;

      expect(service.IsInvalid(objValue)).toEqual(false);
    });

    it(`should able to validate if valid is Valid Object`, () => {
      const objValue = {} as ILazhObject;
      objValue.id = 1;
      objValue.name = 'LazhObject';

      expect(service.IsInvalid(objValue)).toEqual(false);
    });

  });

  //#endregion

  //#region IsArrayValid Function Testing

  describe('IsArrayValid Function', () => {

    it(`should able to validate if value is NULL`, () => {
      expect(service.IsArrayValid(null)).toEqual(false);
    });

    it(`should able to validate if value is Undefined`, () => {
      expect(service.IsArrayValid(undefined)).toEqual(false);
    });

    it(`should able to validate If Array is Empty`, () => {
      expect(service.IsArrayValid([])).toEqual(false);
    });

    it(`should able to validate If Array has Value`, () => {
      expect(service.IsArrayValid(LazhObjects)).toEqual(true);
    });

  });

  //#endregion

});
