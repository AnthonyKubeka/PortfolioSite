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
    duties: ['Provided mentorship to less experienced software engineers on the team.',
             'Worked on Angular / Angular Material frontend, with heavy emphasis on RxJS for event handling.',
             'Backend API in C# and .NET 6 initially, recently led a migration to .NET 8. Worked with XUnit and Moq for unit testing.',
             'Got exposure to Azure Data Factory pipelines for data processing and worked on several features to update, and write new pipelines and SQL logic for financial data transformation.'],
    client: 'Ninety One'
  },
  {
    type: CvCardType.Experience,
    heading: 'Software Engineer',
    startDate: new Date('January 1, 2021'),
    place: 'Entelect',
    endDate: new Date('December 31, 2022'),
    duties: ['Significantly contributed to the development of EasyEquities\' pension fund platform, RISE, by implementing features including - buying and selling holdings, withdrawing pension funds, managing pension funds for individuals and corporates.',
              'Utilized Angular for frontend development, adhering to the Model-View-ViewModel pattern.',
              'Developed and maintained the backend API using C# and .NET Framework, employing Entity Framework for object-relational mapping and NUnit for unit testing.',
              'Adopted a database-first approach for SQL Server, overseeing data structure alterations within the database script project to facilitate seamless deployments.',
              '<strong>Key feature</strong>: Implemented integration with SARS for automatic submission of tax forms and claim withdrawals'],
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
