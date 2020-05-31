import { NgModule } from '@angular/core';

import { LazhValidatorService } from './services/lazh-validator.service';
import { LazhValidPipe } from './pipe/lazh-valid.pipe';
import { LazhInvalidPipe } from './pipe/lazh-invalid.pipe';
import { LazhIsarrayPipe } from './pipe/lazh-isarray.pipe';

@NgModule({
  declarations: [LazhValidPipe, LazhInvalidPipe, LazhIsarrayPipe],
  imports: [
  ],
  exports: [LazhValidPipe, LazhInvalidPipe, LazhIsarrayPipe]
})
export class LazhValidatorModule { }
