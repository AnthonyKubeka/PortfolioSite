import { Injectable } from '@angular/core';
import { CvCard } from './cv-card';
import { cvCardData } from '../../assets/cv-cards';
import { CvCardType } from './cv-card-type.enum';

@Injectable({
  providedIn: 'root'
})
export class CvCardService {
  private cvCards: CvCard[] = [];
  constructor() {
    this.cvCards = cvCardData;
   }

  getExperienceCvCards(): CvCard[] {
    return this.cvCards.filter(x => x.type == CvCardType.Experience);
  }

  getEducationCvCards(): CvCard[] {
    return this.cvCards.filter(x => x.type == CvCardType.Education);
  }
}
