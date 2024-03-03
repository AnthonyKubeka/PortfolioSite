import { IProjectCard } from "../app/projects/project-card/project-card";
import { Technology } from "../app/shared/technology";

export const technologyMap : {[key: string]: Technology} = {
  'HTML': {
    description: 'HTML',
    bgColour: 'bg-blue-100'
  },
  'CSS': {
    description: 'CSS',
    bgColour: 'bg-red-100'
  },
  'JavaScript': {
    description: 'JavaScript',
    bgColour: 'bg-green-100'
  },
  'Typescript': {
    description: 'Typescript',
    bgColour: 'bg-green-300'
  },
  'WPF': {
    description: 'WPF',
    bgColour: 'bg-blue-400'
  },
  'C#': {
    description: 'C#',
    bgColour: 'bg-indigo-300'
  },
  'Angular': {
    description: 'Angular',
    bgColour: 'bg-red-300'
  },
  'Azure': {
    description: 'Azure',
    bgColour: 'bg-blue-600'
  },
  'Azure DevOps': {
    description: 'Azure DevOps',
    bgColour: 'bg-blue-400'
  }
};


export const projectData: IProjectCard[] = [
  {
   projectName: 'Colour Tiles',
   projectDescription: 'A simple RGB Color Guessing Game',
   projectType:'Web App',
   technologies: [technologyMap['HTML'], technologyMap['CSS'], technologyMap['JavaScript']],
   repoUrl: 'https://github.com/AnthonyKubeka/Colour-Game-Project',
   projectUrl: 'https://anthonykubeka.github.io/Colour-Game-Project/'
  },
  {
    projectName: 'FileName Tagger',
    projectDescription: 'A WPF Desktop App to tag filenames with custom tags',
    projectType:'Desktop App',
    technologies: [technologyMap['WPF'], technologyMap['C#']],
    repoUrl: 'https://github.com/AnthonyKubeka/FileNameTagger'
  }
]


