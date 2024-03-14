import { Component, Input } from '@angular/core';
import { CvCardComponent } from '../cv-card/cv-card.component';
import { CvCard } from '../cv-card';

@Component({
  selector: 'app-cv-section-card',
  standalone: true,
  imports: [CvCardComponent],
  templateUrl: './cv-section-card.component.html',
  styleUrl: './cv-section-card.component.css'
})
export class CvSectionCardComponent {
  @Input() heading: string | undefined;
  @Input() cvCards: CvCard[] = [];
  @Input() description: string | undefined;
}
