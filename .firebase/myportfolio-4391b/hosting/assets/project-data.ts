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
  },
  'RxJS':{
    description: 'RxJS',
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
  // {
  //   projectName: 'FileName Tagger',
  //   projectDescription: 'A WPF Desktop App to tag filenames with custom tags.',
  //   projectType:'Desktop App',
  //   technologies: [technologyMap['WPF'], technologyMap['C#']],
  //   repoUrl: 'https://github.com/AnthonyKubeka/FileNameTagger',
  //   projectUrl: 'https://github.com/AnthonyKubeka/FileNameTagger'
  // }, todo: Add back
  {
    projectName: 'Today\'s Workout',
    projectDescription: 'A workout / exercise session tracker, allowing you to track exercise sets, reps and intensity, output your results or copy to clipboard. This project uses an Angular Frontend with RxJS for in-memory store and a Backend API (Azure App Service) for storing / adding exercises names.',
    projectType: 'Web App',
    technologies: [technologyMap['C#'], technologyMap['Azure'], technologyMap['Angular'], technologyMap['RxJS'], technologyMap['.NETCore']],
    repoUrl: 'https://github.com/AnthonyKubeka/TodaysWorkout',
    projectUrl: 'https://todays-workout.web.app/'
  }
]


