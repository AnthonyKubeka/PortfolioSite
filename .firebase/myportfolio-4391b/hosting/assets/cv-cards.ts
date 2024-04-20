import { CvCard } from "../app/cv/cv-card";
import { CvCardType } from "../app/cv/cv-card-type.enum";
import { EducationCvCard } from "../app/cv/education-cv-card";
import { ExperienceCvCard } from "../app/cv/experience-cv-card";

const experienceCvCards: ExperienceCvCard[] = [
  {
    type: CvCardType.Experience,
    heading: 'Intermediate Software Engineer',
    startDate: new Date('January 1, 2023'),
    place: 'Entelect',
    duties: ['Worked on Angular front-end and .NET Core back-end for Ninety One\'s Investment Platform.',
             'Drove customer growth by implementing REST API endpoints and Angular components with RxJS for event handling to decrease rejection rates of investment transactions on Ninety One\'s investment platform.',
             'Improved Ninety One\'s business efficiency by implementing a full-stack feature to allow manual investment instructions to be submitted via the web, using Azure Service Bus and Function App, reducing the need for manual quality control.',
             'Investigated and resolved production issues with critical investment instructions in Ninety One\'s Azure CosmosDB database and Function Apps under time pressure.',
             'Mitigated business risk by implementing critical bug fixes for the instruction investment process as soon as these were discovered.',
             'Improved code coverage for the instruction investment process by writing unit tests for legacy C# code using XUnit and Moq.',
             'Mentored junior engineers on the team in terms of SOLID principles, best practices and solution design.'],
    client: 'Ninety One Investments'
  },
  {
    type: CvCardType.Experience,
    heading: 'Software Engineer',
    startDate: new Date('January 1, 2021'),
    place: 'Entelect',
    endDate: new Date('December 31, 2022'),
    duties: ['Enabled the milestone launch of EasyEquities\' pension fund platform, RISE, by completing necessary functionality as full-stack features.',
              'Added Reactive Angular Forms to allow for capturing of essential data for adding pension funds and companies to the system.',
              'Implemented an automatic process using SignalR, NServiceBus and SQL Server stored procedures to bulk load thousands of members onto the system.',
              'Wrote several SQL Server stored procedures to transform SARS data per integration allowing automatic submission of tax forms for claim withdrawals.',
              'Used Azure App Insights to investigate and resolve production issues with the claims withdrawal process under time pressure.',
              'Improved code coverage for the claims withdrawal process by writing unit tests for C# code using NUnit and Moq.'],
    client: 'EasyEquities'
  }
]

const educationCvCards: EducationCvCard[] = [
  {
    type: CvCardType.Education,
    heading: 'Bachelor of Science - Computer Science',
    startDate: new Date('2016'),
    endDate: new Date('Dec 2020'),
    place: 'University of the Witwatersrand',
    subjects: ['Computer Science', 'Computational and Applied Mathematics', 'Mathematics']
  }
]

export const cvCardData: CvCard[] = [
  ...experienceCvCards,
  ...educationCvCards
]
