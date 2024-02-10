import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, ProjectsOverviewComponent
  ],
  exports: [ProjectsOverviewComponent]
})
export class ProjectsModule { }
