import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./sections/hero/hero.component";
import { HeaderComponent } from './core/header/header.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { FooterComponent } from './core/footer/footer.component';
import { HobbiesComponent } from "./sections/hobbies/hobbies.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, HeaderComponent, ExperienceComponent, ProjectsComponent, TestimonialsComponent, SkillsComponent, FooterComponent, HobbiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
