import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonials-card',
  templateUrl: './testimonials-card.component.html',
  styleUrls: ['./testimonials-card.component.sass']
})
export class TestimonialsCardComponent {
  @Input() name: string = '';
  @Input() date: string = '';
  @Input() job: string = '';
  @Input() company: string = '';
  @Input() text: string = '';
  @Input() best: string = '';
  @Input() picture: string = '';

  isExpanded: boolean = false;

  constructor() {

  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

}
