import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit, OnDestroy {

  activeIndex = 0; // 0 = 2023–2024, 1 = 2024–2025

  private intervalId!: number;

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.activeIndex = this.activeIndex === 0 ? 1 : 0;
    }, 3000); // syncs with pulse timing
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
