import { CvCardService } from './../cv-card.service';
import { Component } from '@angular/core';
import { CvCardComponent } from '../cv-card/cv-card.component';
import { CvCard } from '../cv-card';
import { ProfileCardComponent } from '../profile-card/profile-card.component';

@Component({
  selector: 'app-cv-overview',
  standalone: true,
  imports: [CvCardComponent, ProfileCardComponent],
  templateUrl: './cv-overview.component.html',
  styleUrl: './cv-overview.component.css'
})
export class CvOverviewComponent {
  experienceCvCards: CvCard[] = [];
  educationCvCards: CvCard[] = [];
constructor(private cvCardService: CvCardService){
  this.experienceCvCards = cvCardService.getExperienceCvCards();
  this.educationCvCards = cvCardService.getEducationCvCards();
}


}
