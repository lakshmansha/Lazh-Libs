import { TestBed } from '@angular/core/testing';

import { ILazhObject } from '../tests/index';

import { LazhInvalidPipe } from './lazh-invalid.pipe';
import { LazhValidatorService } from '../services/lazh-validator.service';

describe('Lazh In-Valid Pipe Tests', () => {
  let serviceSpy: LazhValidatorService;
  let pipe: LazhInvalidPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LazhValidatorService,
        LazhInvalidPipe
      ]
    }).compileComponents();

    serviceSpy = TestBed.inject(LazhValidatorService);
    pipe = TestBed.inject(LazhInvalidPipe);
  });

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should able to validate if value is NULL`, () => {
    expect(pipe.transform(null)).toEqual(true);
  });

  it(`should able to validate if value is Undefined`, () => {
    expect(pipe.transform(undefined)).toEqual(true);
  });

  it(`should able to validate if value is '' `, () => {
    expect(pipe.transform('')).toEqual(true);
  });

  it(`should able to validate if value is'null'`, () => {
    expect(pipe.transform('null')).toEqual(true);
  });

  it(`should able to validate if value is 'Test'`, () => {
    expect(pipe.transform('Test')).toEqual(false);
  });

  it(`should able to validate if value of '0' `, () => {
    expect(pipe.transform(0)).toEqual(true);
  });

  it(`should able to validate if value is valid`, () => {
    expect(pipe.transform(5)).toEqual(false);
  });

  it(`should able to validate if valid is Invalid Object`, () => {
    const objValue = {} as ILazhObject;

    expect(pipe.transform(objValue)).toEqual(false);
  });

  it(`should able to validate if valid is Valid Object`, () => {
    const objValue = {} as ILazhObject;
    objValue.id = 1;
    objValue.name = 'LazhObject';

    expect(pipe.transform(objValue)).toEqual(false);
  });

});
