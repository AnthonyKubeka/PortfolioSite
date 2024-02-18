import { CvCard } from "../app/cv/cv-card";
import { CvCardType } from "../app/cv/cv-card-type.enum";

export const cvCardData: CvCard[] = [
  {
    type: CvCardType.Experience,
    heading: 'Intermediate Software Engineer',
    startDate: new Date('January 1, 2023'),
    place: 'Entelect'
  },
  {
    type: CvCardType.Experience,
    heading: 'Software Engineer',
    startDate: new Date('January 1, 2021'),
    place: 'Entelect',
    endDate: new Date('December 31, 2022')
  },
  {
    type: CvCardType.Education,
    heading: 'Bachelor of Science - Computer Science',
    startDate: new Date('2016'),
    endDate: new Date('Dec 2020'),
    place: 'University of the Witwatersrand'
  }
]
