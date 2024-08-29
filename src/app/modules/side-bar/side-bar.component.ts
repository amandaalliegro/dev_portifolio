import { Component } from '@angular/core';
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
      link: ""
    },
    {
      icon: faComments,
      title: "Recommendations",
      link: ""
    },
    {
      icon: faLayerGroup,
      title: "Technologies",
      link: ""
    },
    {
      icon: faEnvelope,
      title: "Contact",
      link: ""
    }

  ]
}
