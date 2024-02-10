import { Routes } from '@angular/router';
import { ProjectsOverviewComponent } from './projects/projects-overview/projects-overview.component';
import { HeroComponent } from './landing/hero/hero.component';
import { CvOverviewComponent } from './cv/cv-overview/cv-overview.component';

export const routes: Routes = [
  {path: '', component: HeroComponent},
  {path: 'projects', component: ProjectsOverviewComponent},
  {path: 'cv', component: CvOverviewComponent}
];
