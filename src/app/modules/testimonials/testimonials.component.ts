import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.sass']
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: "Thiago Almeida",
      job: "Software Developer",
      company: "Mazlite",
      picture: "https://media.licdn.com/dms/image/v2/C5603AQFqa9aOhpCM7A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1635276207004?e=1730332800&v=beta&t=K3lRw80cq4lSkg1Eao-MXbi-bRtIsxc7NQTunhxV-ZU",
      text: `Amanda is an invaluable asset to our team, consistently providing insightful feedback during code reviews to improve efficiency and propose innovative solutions. Their meticulous tracking of project tasks using Jira ensures timely completion of milestones, and their detailed project reports are always thorough and informative.
      In addition to their technical prowess, Amanda is a creative thinker who fosters innovation during brainstorming sessions, contributing to forward-thinking solutions. They have a proven track record of aligning code structures with organizational objectives to optimize productivity and efficiency.
      Amanda has made significant contributions to our software's value, user experience, and codebase scalability. Their expertise in technologies like Angular, Figma, SCSS, HTML5 and Bootstrap has been instrumental in developing and enhancing key features.
      Moreover, Amanda has demonstrated leadership in project execution and maintenance, ensuring smooth operations and addressing bugs promptly. Their commitment to excellence and continuous improvement sets them apart as a highly valued team member.`,
      date: "May 6, 2024"
    },
    {
      name: "Dave Newcombe",
      job: "Software Developer",
      company: "Mazlite",
      picture: "https://media.licdn.com/dms/image/v2/D5603AQGacpPoOgzKSA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709328982964?e=1730332800&v=beta&t=AAB6mFb7-14IAtsjphzgFXzD8B91a7E97n_UStOby8o",
      text: "I had the pleasure of working alongside Amanda at Mazlite, where we both served as Software Developers. Amanda's expertise in the Angular framework played a pivotal role in designing the UI/UX of our company’s application. Her deep knowledge and proficiency in frontend development were evident in the intuitive interfaces she created, which matched the often complex requirements our products demanded. Amanda’s ability to mentor and guide others, including myself, significantly contributed to my growth as a frontend developer. Her willingness to share her knowledge and provide constructive feedback was invaluable. She consistently made herself available to assist with any coding challenges, demonstrating her dedication to the team's overall success and continued professional development. Working with Amanda was always a positive experience. She communicated effectively, fostering a collaborative and supportive work environment. Amanda’s commitment to her work was remarkable; she often put in extra hours to ensure the highest quality output. Her dedication and work ethic were something I greatly admired. I highly recommend Amanda for any role that requires strong frontend development skills and a collaborative spirit. She would be an asset to any team.",
      date: "May 22, 2024"
    }
  ]

}
