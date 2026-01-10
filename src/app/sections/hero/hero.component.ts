import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  openGitHub(): void {
    window.open('https://github.com/abinashkm', '_blank');
  }

  openResume(): void {
    window.open('/Resume.pdf', '_blank');
  }

  openLinkedIn(): void {
    window.open('https://www.linkedin.com/in/mohantyabinash13092000/', '_blank');
  } 

}
