import { CvCardType } from './../cv-card-type.enum';
import { CvCard } from './../cv-card';
import { Component, Input } from '@angular/core';
import { CvModule } from '../cv.module';
import { ExperienceCvCard } from '../experience-cv-card';
import { EducationCvCard } from '../education-cv-card';

@Component({
  selector: 'app-cv-card',
  standalone: true,
  imports: [CvModule],
  templateUrl: './cv-card.component.html',
  styleUrl: './cv-card.component.css'
})
export class CvCardComponent {
  @Input() cvCard: CvCard | undefined
  readonly CvCardType = CvCardType;

  get experienceCvCard(): ExperienceCvCard | null{
    if (this.cvCard?.type === CvCardType.Experience) {
      return this.cvCard as ExperienceCvCard;
    }

    return null;
  }

  get educationCvCard(): EducationCvCard | null{
    if (this.cvCard?.type === CvCardType.Education) {
      return this.cvCard as EducationCvCard;
    }

    return null;
  }
}
