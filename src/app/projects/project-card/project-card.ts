import { Technology } from "../../shared/technology";

export interface IProjectCard {
  projectName: string;
  projectDescription: string;
  projectType: string;
  technologies: Technology[];
  projectUrl?: string;
  repoUrl?: string;
}
