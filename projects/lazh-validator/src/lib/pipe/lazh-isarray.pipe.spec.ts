import { TestBed } from '@angular/core/testing';

import { LazhObjects } from '../testing';

import { LazhIsarrayPipe } from './lazh-isarray.pipe';
import { LazhValidatorService } from '../lazh-validator.service';


describe('Lazh IsArray Pipe Tests', () => {
  let serviceSpy: LazhValidatorService;
  let pipe: LazhIsarrayPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LazhValidatorService,
        LazhIsarrayPipe
      ]
    });
    serviceSpy = TestBed.inject(LazhValidatorService);
    pipe = TestBed.inject(LazhIsarrayPipe);
  });

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should able to validate if value is NULL`, () => {
    expect(pipe.transform(null)).toEqual(false);
  });

  it(`should able to validate if value is Undefined`, () => {
    expect(pipe.transform(undefined)).toEqual(false);
  });

  it(`should able to validate If Array is Empty`, () => {
    expect(pipe.transform([])).toEqual(false);
  });

  it(`should able to validate If Array has Value`, () => {
    expect(pipe.transform(LazhObjects)).toEqual(true);
  });

});
