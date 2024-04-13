import { IProjectCard } from "../app/projects/project-card/project-card";
import { Technology } from "../app/shared/technology";

export const technologyMap : {[key: string]: Technology} = {
  'Typescript': {
    description: 'Typescript',
    bgColour: 'bg-blue-300'
  },
  '.NETCore': {
    description: '.NET Core',
    bgColour: 'bg-blue-300'
  },
  'WPF': {
    description: 'WPF',
    bgColour: 'bg-blue-300'
  },
  'C#': {
    description: 'C#',
    bgColour: 'bg-blue-300'
  },
  'Angular': {
    description: 'Angular',
    bgColour: 'bg-blue-300'
  },
  'Azure': {
    description: 'Azure',
    bgColour: 'bg-blue-300'
  },
  'Azure DevOps': {
    description: 'Azure DevOps',
    bgColour: 'bg-blue-300'
  },
  'SQL Server': {
    description: 'SQL Server',
    bgColour: 'bg-blue-300'
  }
};


export const projectData: IProjectCard[] = [
  {
   projectName: 'This portfolio',
   projectDescription: 'A portfolio built with Angular and TailwindCSS, hosted via Firebase.',
   projectType:'Web App',
   technologies: [technologyMap['Angular'], technologyMap['Typescript']],
   repoUrl: 'https://github.com/AnthonyKubeka/PortfolioSite'
  },
  {
    projectName: 'FileName Tagger',
    projectDescription: 'A WPF Desktop App to tag filenames with custom tags.',
    projectType:'Desktop App',
    technologies: [technologyMap['WPF'], technologyMap['C#']],
    repoUrl: 'https://github.com/AnthonyKubeka/FileNameTagger',
    projectUrl: 'https://github.com/AnthonyKubeka/FileNameTagger'
  },
  {
    projectName: 'Today\'s Workout',
    projectDescription: 'A workout / exercise session tracker, replace your Notes app with this! Angular Frontend, hitting a custom Backend API (Azure App Service).',
    projectType: 'Web App',
    technologies: [technologyMap['C#'], technologyMap['Azure'], technologyMap['Angular'], technologyMap['.NETCore']],
    repoUrl: 'https://github.com/AnthonyKubeka/TodaysWorkout',
    projectUrl: 'https://todays-workout.web.app/'
  }
]


