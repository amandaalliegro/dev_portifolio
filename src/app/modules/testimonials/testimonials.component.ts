import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.sass']
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: "Cameron Dallas",
      job: "Co-Founder and CTO",
      company: "Mazlite",
      picture: "https://media.licdn.com/dms/image/v2/C5603AQFoZ71g19lKgg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1629845108126?e=1732752000&v=beta&t=Ri-0O0yWEoTu0fV48aGe0q5Yj1RCSWQi-zHrqLL3HRY",
      text: "I have directly managed Amanda for over three years at my startup, and her contributions have been absolutely critical to the success of our team and product. Amanda leads our frontend and user experience development, and her deep expertise in TypeScript, CSS, web APIs, graphic design, Figma, and overall frontend development has been invaluable. In the fast-paced, ever-changing, and at times chaotic, environment of a startup, Amanda consistently rose to the occasion, delivering exceptional results no matter the challenge. She completely overhauled our frontend codebase, transforming a buggy, unstable, and inefficient user interface into a stable, efficient, and user-friendly product. Her impact was felt across the company, both in the technical quality of our product and as a mentor to other developers in our company. One of Amanda’s greatest strengths is her independence and self-motivation. She consistently aligned her work with the company's strategic goals, and I never had to second-guess her commitment or drive. Amanda was always fully engaged, proactive, and pushing the boundaries of our technology, contributing not just as a developer, but as a forward-thinking leader in her domain.",
      best: "Amanda leads our frontend and user experience development, and her deep expertise in TypeScript, CSS, web APIs, graphic design, Figma, and overall frontend development has been invaluable. She completely overhauled our frontend codebase, transforming a buggy, unstable, and inefficient user interface into a stable, efficient, and user-friendly product. Her impact was felt across the company, both in the technical quality of our product and as a mentor to other developers.",
      date: "September 24, 2024"
    },
    {
      name: "Dave Newcombe",
      job: "Software Developer",
      company: "Mazlite",
      picture: "https://media.licdn.com/dms/image/v2/D5603AQGacpPoOgzKSA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1709328982964?e=1730332800&v=beta&t=AAB6mFb7-14IAtsjphzgFXzD8B91a7E97n_UStOby8o",
      text: "I had the pleasure of working alongside Amanda at Mazlite, where we both served as Software Developers. Amanda's expertise in the Angular framework played a pivotal role in designing the UI/UX of our company’s application. Her deep knowledge and proficiency in frontend development were evident in the intuitive interfaces she created, which matched the often complex requirements our products demanded. Amanda’s ability to mentor and guide others, including myself, significantly contributed to my growth as a frontend developer. Her willingness to share her knowledge and provide constructive feedback was invaluable. She consistently made herself available to assist with any coding challenges, demonstrating her dedication to the team's overall success and continued professional development. Working with Amanda was always a positive experience. She communicated effectively, fostering a collaborative and supportive work environment. Amanda’s commitment to her work was remarkable; she often put in extra hours to ensure the highest quality output. Her dedication and work ethic were something I greatly admired. I highly recommend Amanda for any role that requires strong frontend development skills and a collaborative spirit. She would be an asset to any team.",
      best:"Amanda's expertise in Angular played a pivotal role in designing intuitive UI/UX for our company’s application. Her ability to mentor others and her commitment to delivering high-quality work made a significant impact on the team's success.",
      date: "May 22, 2024"
    },
    {
      name: "Thiago Almeida",
      job: "Software Developer",
      company: "Mazlite",
      picture: "https://media.licdn.com/dms/image/v2/C5603AQFqa9aOhpCM7A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1635276207004?e=1730332800&v=beta&t=K3lRw80cq4lSkg1Eao-MXbi-bRtIsxc7NQTunhxV-ZU",
      text: "Amanda is an invaluable asset to our team, consistently providing insightful feedback during code reviews to improve efficiency and propose innovative solutions. Their meticulous tracking of project tasks using Jira ensures timely completion of milestones, and their detailed project reports are always thorough and informative. In addition to their technical prowess, Amanda is a creative thinker who fosters innovation during brainstorming sessions, contributing to forward-thinking solutions. They have a proven track record of aligning code structures with organizational objectives to optimize productivity and efficiency. Amanda has made significant contributions to our software's value, user experience, and codebase scalability. Their expertise in technologies like Angular, Figma, SCSS, HTML5 and Bootstrap has been instrumental in developing and enhancing key features. Moreover, Amanda has demonstrated leadership in project execution and maintenance, ensuring smooth operations and addressing bugs promptly. Their commitment to excellence and continuous improvement sets them apart as a highly valued team member.",
      best: "Amanda is an invaluable asset, known for providing insightful feedback, fostering innovation, and aligning code with organizational objectives. Their expertise in Angular, Figma, and SCSS has been instrumental in enhancing our software's value and user experience.",
      date: "May 6, 2024"
    }
  ]

  constructor(
    private modalService: ModalService
   ){
  }

  openModal() {
    this.modalService.open()
  }
}
