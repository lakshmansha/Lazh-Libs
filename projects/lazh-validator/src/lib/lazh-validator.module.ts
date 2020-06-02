import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LazhValidPipe } from './pipe/lazh-valid.pipe';
import { LazhInvalidPipe } from './pipe/lazh-invalid.pipe';
import { LazhIsarrayPipe } from './pipe/lazh-isarray.pipe';

@NgModule({
  declarations: [LazhValidPipe, LazhInvalidPipe, LazhIsarrayPipe],
  imports: [
    CommonModule
  ],
  exports: [LazhValidPipe, LazhInvalidPipe, LazhIsarrayPipe],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LazhValidatorModule { }
