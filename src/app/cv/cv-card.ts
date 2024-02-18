import { CvCardType } from "./cv-card-type.enum";

export interface CvCard {
  type: CvCardType;
  startDate: Date;
  heading: string;
  place: string;
  endDate?: Date;
}
