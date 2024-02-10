import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvOverviewComponent } from './cv-overview/cv-overview.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, CvOverviewComponent
  ],
  exports: [CvOverviewComponent]
})
export class CvModule { }
