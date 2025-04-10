import { DataContact, Data } from '../interfaces/data.interface';

export const contacts: DataContact[] = [
  {
    name: 'Volodymyr Grushka',
    'e-mail': 'grushvolo@gmail.com',
    gitHub: 'https://github.com/VolodumurGruv',
    tg: 'https://t.me/grushvolo',
  },
];

export const summary: Data[] = [
  // {
  //   key: 'text',
  //   value:
  //     'About 2 years of experience in the application software development. Experience with:',
  // },
  {
    key: 'Angular / TypeScript',
    value: 2020,
  },
  { key: 'JavaScript / Html / CSS /SCSS', value: 2020 },
  { key: 'Boostrap / Material', value: 2020 },
  { key: 'Rxjs', value: 2021 },
  { key: 'NodeJS', value: 2021 },
  // { key: 'English', value: 'upper-intermediate level' },
];

export const technicalEnvironment: Data[] = [
  {
    key: 'OPERATING SYSTEMS',
    value: 'Windows 2000/XP/2003/Vista/7, Linux Ubuntu',
  },
  { key: 'LANGUAGES', value: 'JavaScript, TypeScript, RxJS, HTML, NodeJS' },
  {
    key: 'WEB TECHNOLOGIES',
    value: 'Angular, CSS, SCSS, Bootstrap, Materialize, Angular Material',
  },
  { key: 'DBMS', value: 'MongoDB,MySQL' },
  { key: 'SOFTWARE', value: 'VisualStudioCode, WebStorm' },
  {
    key: 'MANAGEMENT',
    value:
      'Communication with estimation, team management, working with distributed team',
  },
];

export const careerHistory: Data[] = [
  {
    key: 'Studying process',
    value: 'March, 2019, Now, Angular, NodeJS, MongoDB, MySQL, HTML5, CSS',
  },
  {
    key: 'Supply Chair Manager',
    value: 'April 2007 - March 2010 Malinove, Ukraine',
  },
  {
    key: 'Economist Ukrainian scientific research institute of the sugar industry, Ukraine',
    value:
      'Working as an economist, making recommendations for factories, which was based on their real data. Those recommendations could help them to improve their financial situation and pass the crises. Made reviews about the actual financial situation in the sugar industry. Keep statistics data in real time.',
  },
];

export const education: Data[] = [
  {
    key: 'Bachelor of Economic Science',
    value: 'Economist, 2006 National University of Food Technology, Ukraine',
  },
];

export const someProjects: Data[] = [
  {
    key: 'Bootcamp',
    value:
      'Making/deleting posts and coments and ratings. Signin and sign up of users. Geocoding, NodeJS, <ejs>, Bootstrap4, CSS, Helmet, Passport Auth0, MongoDB, Cloudinary, Flash, Express, Mongoose, Heroku',
    link: 'https://github.com/VolodumurGruv/yelcamp',
  },
  {
    key: 'Blog',
    value: 'A simple blog with the admin panel Angular, SCSS, Firebase',
    link: 'https://github.com/VolodumurGruv/Angular/tree/03cb3162d81ad75861d1d42ff30a43d34d9a64c8/first/blog',
  },
  {
    key: 'Portfolio',
    value: 'NodeJS + a Telegram bot and Nodemailer',
    link: 'https://github.com/VolodumurGruv/portfolio/tree/master/mystyle',
  },
  {
    key: 'TeamChallenge',
    value: 'Working with a team on online shope project',
    link: 'https://volodumurgruv.github.io/bestOnlineStore/',
  },
];

export const additionalInfo = 'Single, Driver License B';
