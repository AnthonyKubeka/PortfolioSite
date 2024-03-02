import { StaticDataService } from './../../cv/static-data.service';
import { Component } from '@angular/core';
import { IProjectCard } from '../project-card/project-card';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects-overview',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects-overview.component.html',
  styleUrl: './projects-overview.component.css'
})
export class ProjectsOverviewComponent {
  projectCards:  IProjectCard[] = [];
constructor(private staticDataService: StaticDataService){
  this.staticDataService = staticDataService;
  this.projectCards = this.staticDataService.getProjectData();
}
}
