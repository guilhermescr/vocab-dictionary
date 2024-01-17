import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { WordComponent } from './word/word.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent,    WordComponent],
  imports: [CommonModule, SharedModule],
})
export class PagesModule {}
