import { AfterViewInit, Component, OnInit } from '@angular/core';
import { animate, state, style, keyframes, transition, trigger } from '@angular/animations';
import { ScrollSpyService } from 'ngx-scrollspy';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  animations: [

    trigger('focusPanel', [
      state('inactive', style({
        transform: 'scale(1)',
        backgroundColor: '#eee'
      })),
      state('active', style({
        transform: 'scale(1.1)',
        backgroundColor: '#cfd8dc'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),

    trigger('movePanel', [

      transition('void => *', [
        animate(600, keyframes([
          style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
          style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
          style({opacity: 1, transform: 'translateY(0)', offset: 1}),
        ]))
      ])
    ])


  ]
})


export class ResumeComponent {

  education = [
    {
      name: 'Australian National University',
      bg: 'http://solinvictus.org.au/wp-content/uploads/2016/12/ANU_2-e1481464863330.png',
      period: 'Feb 2016 - Nov 2017',
      major: 'Master of computing',
      direction: 'Artificial Intelligence, Professional Computing',
      description: `Exposed to best practice in computing and cutting edge courses of relevance to computing practitioners.
      Additionally, with these specializations, the key ICT areas of networks, databases,
       software analysis & design and project management were proficient.`,
      gpa: '5.44/7'

    },
    {
      name: 'Université du Québec à Chicoutimi',
      bg: 'https://pbs.twimg.com/media/DONZcTaWAAEcksm.png',
      period: 'Sep 2011 - Jul 2015',
      major: 'Bachelor of Computer Science',
      direction: 'Management Information System',
      description: 'Some description',
      gpa: '3.33/4.30'

    },
    {
      name: 'Tianjin University of Technology',
      bg: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Tianjin_University_of_Technology_logo.png',
      period: 'Sep 2011 - Jul 2015',
      major: 'Bachelor of Computer Science',
      direction: 'Computer Science and Technology',
      description: 'Some description',
      gpa: '3.8/4.0'

    },

  ];

  experiences = [
    {
      company: 'Collagis Pty Ltd(ANU Tech Launcher)',
      position: 'Back-end Programmer',
      location: 'Sydney, NSW',
      period: 'Feb 2017 - Nov 2017',
      description: `
      Collagis is a consulting company whose goal is to harness the full potential of individuals and teams.
      The project aims to foster a deeper connection and understanding between Collagis and its corporate clients.
       I took the charge of making a agile back-end to provide business logic.
      Back-end is using C# and new .net core by required.
      `
    },
    {
      company: 'ZhiWangYiLian Co.ltd ',
      position: 'Core Component Developer',
      location: 'ChaoYang, Beijing',
      period: 'Feb 2015 - Apr 2015',
      description: `
      Responsible for a communication protocol between server and terminal.
      Protocol are running on ticket machines located in commercial car park distributed all over the city.
      `
    },
    {
      company: 'HongYuan Technology (Beijing) Co.Ltd',
      position: 'Supporting Programmer',
      location: 'Haidian, Beijing',
      period: 'Jul 2013 - Sep 2013',
      description: `
      Took the charge of comportment development based on their own front end system.
      Test exists component and provide plan of improvement.
      `
    },
    {
      company: 'SINOHYDRO 13th Bureau',
      position: 'Mobile Developer',
      location: 'XiQing, Tianjin',
      period: 'Mar 2013 - Jun 2013',
      description: `
      Leading development on inner-office and document signature system. Phone-gap been used for mobile device platform development.
       Product still using in company.
      `
    },
  ];

  skills = [
    {
      name: 'Csharp',
      iconClasses: ['devicon-csharp-plain'],
      level: '95',
      barClasses: ['progress-bar-striped', 'progress-bar-animated', 'bg-success']
    },
    {
      name: 'Java',
      iconClasses: ['devicon-java-plain'],
      level: '90',
      barClasses: ['progress-bar-striped', 'progress-bar-animated', 'bg-success']
    },

    {
      name: 'Linux',
      iconClasses: ['devicon-linux-plain'],
      level: '90',
      barClasses: ['progress-bar-striped', 'progress-bar-animated', 'bg-success']
    },
    {
      name: 'Mysql',
      iconClasses: ['devicon-mysql-plain'],
      level: '85',
      barClasses: ['progress-bar-striped', 'progress-bar-animated', 'bg-success']
    },
    {
      name: 'Python',
      iconClasses: ['devicon-python-plain'],
      level: '75',
      barClasses: ['progress-bar-striped', 'progress-bar-animated', 'bg-success']
    },
    {
      name: 'Javascript',
      iconClasses: ['devicon-javascript-plain'],
      level: '65',
      barClasses: ['progress-bar-striped', 'progress-bar-animated', 'bg-info']
    },
    {
      name: 'Html5',
      iconClasses: ['devicon-html5-plain'],
      level: '60',
      barClasses: ['progress-bar-striped', 'progress-bar-animated', 'bg-info']
    },

    {
      name: 'Cpp',
      iconClasses: ['devicon-cplusplus-plain'],
      level: '25',
      barClasses: ['progress-bar-animated', 'bg-danger']
    }];


  state = 'inactive';

  toggleMove() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }
}
