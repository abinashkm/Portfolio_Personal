import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  imports: [CommonModule],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {
  
  selectedImage: string | null = null;

  openImage(src: string): void {
    this.selectedImage = src;
  }

  closeImage(): void {
    this.selectedImage = null;
  }

}
