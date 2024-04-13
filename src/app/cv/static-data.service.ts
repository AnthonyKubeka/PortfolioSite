import { technologyMap } from './../../assets/project-data';
import { Injectable } from '@angular/core';
import { CvCard } from './cv-card';
import { cvCardData } from '../../assets/cv-cards';
import { CvCardType } from './cv-card-type.enum';
import { projectData} from '../../assets/project-data';
import { IProjectCard } from '../projects/project-card/project-card';
import { Technology } from '../shared/technology';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {
  private cvCards: CvCard[] = [];
  private projectData: IProjectCard[] = [];
  constructor() {
    this.cvCards = cvCardData;
    this.projectData = projectData;
   }

  getExperienceCvCards(): CvCard[] {
    return this.cvCards.filter(x => x.type == CvCardType.Experience);
  }

  getEducationCvCards(): CvCard[] {
    return this.cvCards.filter(x => x.type == CvCardType.Education);
  }

  getProjectData(): IProjectCard[] {
    return this.projectData;
  }

  getTechnologies(): Technology[] {
    return Object.values(technologyMap);
  }
}
