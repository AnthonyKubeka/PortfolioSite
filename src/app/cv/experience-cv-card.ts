import { CvCard } from "./cv-card";

export interface ExperienceCvCard extends CvCard {
  duties: string[];
  client?: string;
}
