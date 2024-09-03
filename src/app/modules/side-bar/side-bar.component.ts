import { Component, Output, EventEmitter } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { faChessQueen, faComments, faEnvelope, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent {
  sections = [
    {
      icon: faChessQueen,
      title: "About Me",
      link: "header"
    },
    {
      icon: faLayerGroup,
      title: "Technologies",
      link: "about-me"
    },
    {
      icon: faComments,
      title: "Recommendations",
      link: "testimonials"
    },
    {
      icon: faEnvelope,
      title: "Contact",
      link: "contact"
    }
  ];

  @Output() navigateTo = new EventEmitter<string>();

  constructor(private modalService: ModalService) {}

  scrollToSection(section: string) {
    if (section === 'contact') {
      console.log(section)
      this.modalService.open();
    } else {
      this.navigateTo.emit(section);
    }
  }
}
