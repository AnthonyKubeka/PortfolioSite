import { CvCardService } from './../cv-card.service';
import { Component } from '@angular/core';
import { CvCardComponent } from '../cv-card/cv-card.component';
import { CvCard } from '../cv-card';

@Component({
  selector: 'app-cv-overview',
  standalone: true,
  imports: [CvCardComponent],
  templateUrl: './cv-overview.component.html',
  styleUrl: './cv-overview.component.css'
})
export class CvOverviewComponent {
  cvCards: CvCard[] = [];
constructor(private cvCardService: CvCardService){
  this.cvCards = cvCardService.getCvCards();
}


}
