import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements AfterViewInit {
  phrases: string[] = [
    'Full Stack Developer',
    'Front End Developer',
    'Graphic Designer',
    'UI/UX Designer'
  ];
  phraseIndex: number = 0;
  charIndex: number = 0;
  currentPhrase: string[] = [];
  isDeleting: boolean = false;
  isEnd: boolean = false;

  ngAfterViewInit() {
    this.type();
  }

  type() {
    this.isEnd = false;
    const typingElement = document.querySelector('.typing') as HTMLElement;
    typingElement.innerHTML = this.currentPhrase.join('');

    if (this.charIndex <= this.phrases[this.phraseIndex].length) {
      if (!this.isDeleting && this.charIndex < this.phrases[this.phraseIndex].length) {
        this.currentPhrase.push(this.phrases[this.phraseIndex][this.charIndex]);
        this.charIndex++;
        typingElement.innerHTML = this.currentPhrase.join('');
      }

      if (this.isDeleting && this.charIndex <= this.phrases[this.phraseIndex].length) {
        this.currentPhrase.pop();
        this.charIndex--;
        typingElement.innerHTML = this.currentPhrase.join('');
      }

      if (this.charIndex === this.phrases[this.phraseIndex].length) {
        this.isEnd = true;
        this.isDeleting = true;
      }

      if (this.isDeleting && this.charIndex === 0) {
        this.currentPhrase = [];
        this.isDeleting = false;
        this.phraseIndex++;
        if (this.phraseIndex === this.phrases.length) {
          this.phraseIndex = 0;
        }
      }
    }

    const typingSpeed = this.isEnd ? 2000 : this.isDeleting ? 50 : 100;
    setTimeout(() => this.type(), typingSpeed);
  }
}
