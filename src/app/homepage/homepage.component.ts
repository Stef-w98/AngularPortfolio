import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  navigateToProjectPage(projectName: string) {
    // Add your navigation logic here
  }

  getProjectImage(title: string): string {
    const firstWord = title.split(' ')[0]; // Get the first word from the project title
    return `assets/${firstWord}.png`; // Return the dynamic image path
  }
}
