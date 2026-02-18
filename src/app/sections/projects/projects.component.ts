import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  openRfqCaseStudy(): void {
    window.open('/rfq-case-study.pdf', '_blank');
  }

  // openEcommerceCaseStudy(): void {
  //   window.open('/ecommerce-case-study.pdf', '_blank');
  // }

}
