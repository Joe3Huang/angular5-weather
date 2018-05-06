import { CurrencyPipe } from '@angular/common';
import { PercentPipe } from '@angular/common';
// LIBRARIES
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KeysPipe } from './keys.pipe';

@NgModule({
  declarations: [
    KeysPipe
  ],
  imports: [
    CommonModule,

  ],
  providers: [],
  bootstrap: [],
  exports: [ 
    KeysPipe
  ]
})
export class PipesLibrary { }