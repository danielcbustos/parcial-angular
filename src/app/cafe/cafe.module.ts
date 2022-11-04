import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeListaComponent } from './cafe-lista/cafe-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[CafeListaComponent],
  declarations: [CafeListaComponent]
})
export class CafeModule { }
