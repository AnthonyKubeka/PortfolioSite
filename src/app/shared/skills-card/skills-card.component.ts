import { Component, Input } from '@angular/core';
import { Technology } from '../technology';

@Component({
  selector: 'app-skills-card',
  standalone: true,
  imports: [],
  templateUrl: './skills-card.component.html',
  styleUrl: './skills-card.component.css'
})
export class SkillsCardComponent {
  @Input() technology?: Technology;

  constructor() {
  }
}
