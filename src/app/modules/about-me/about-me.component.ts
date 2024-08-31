import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.sass']
})
export class AboutMeComponent {
  frontStacks = [
    {
      stack: "Angular",
      bar: "80%"
    },
    {
      stack: "React",
      bar: "40%"
    },
    {
      stack: "TypeScript",
      bar: "85%"
    },
    {
      stack: "SCSS/CSS3/Sass",
      bar: "80%"
    },
    {
      stack: "HTML5",
      bar: "90%"
    },
    {
      stack: "JavaScript",
      bar: "75%"
    },
    {
      stack: "Bootstrap",
      bar: "70%"
    }
  ]
  backStacks = [
    {
      stack:"Node.js",
      bar: "50%"
    },
    {
      stack:"Express.js",
      bar: "50%"
    },
    {
      stack:"PostgreSQL",
      bar: "30%"
    },
  ]
}
