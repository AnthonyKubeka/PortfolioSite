import { Component } from '@angular/core';
import { SkillsCardComponent } from '../skills-card/skills-card.component';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [SkillsCardComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  listOfSkills: Set<string>;
  constructor(){
    this.listOfSkills = new Set<string>(['C#', 'JavaScript', 'Typescript', 'SQL', 'Angular',  '.NET', '.NET Framework', 'Azure', 'Azure DevOps']);
  }
}
