import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./sections/hero/hero.component";
import { HeaderComponent } from './core/header/header.component';
import { ExperienceComponent } from './sections/experience/experience.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, HeaderComponent, ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
