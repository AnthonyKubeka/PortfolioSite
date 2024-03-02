import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { IProjectCard } from './project-card';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() projectCard: IProjectCard | undefined;
}

