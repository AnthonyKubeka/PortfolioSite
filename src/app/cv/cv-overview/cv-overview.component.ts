import { StaticDataService } from '../static-data.service';
import { Component } from '@angular/core';
import { CvCardComponent } from '../cv-card/cv-card.component';
import { CvCard } from '../cv-card';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { AboutCardComponent } from '../about-card/about-card.component';
import { CvSectionCardComponent } from '../cv-section-card/cv-section-card.component';

@Component({
  selector: 'app-cv-overview',
  standalone: true,
  imports: [CvCardComponent, ProfileCardComponent, AboutCardComponent, CvSectionCardComponent],
  templateUrl: './cv-overview.component.html',
  styleUrl: './cv-overview.component.css'
})
export class CvOverviewComponent {
  experienceCvCards: CvCard[] = [];
  educationCvCards: CvCard[] = [];
constructor(private cvCardService: StaticDataService){
  this.experienceCvCards = cvCardService.getExperienceCvCards();
  this.educationCvCards = cvCardService.getEducationCvCards();
}


}
