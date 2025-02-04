import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { FilmsRoutingModule } from './films-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FilmsRoutingModule, MatTableModule],
})
export class FilmsModule {}
