import { Component, Input } from '@angular/core';
import { IProjectCard } from './project-card';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() projectCard: IProjectCard | undefined;
}
