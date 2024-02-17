import { Injectable } from '@angular/core';
import { CvCard } from './cv-card';
import { cvCardData } from '../../assets/cv-cards';

@Injectable({
  providedIn: 'root'
})
export class CvCardService {
  private cvCards: CvCard[] = [];
  constructor() {
    this.cvCards = cvCardData;
   }

  getCvCards(): CvCard[] {
    return this.cvCards;
  }
}
