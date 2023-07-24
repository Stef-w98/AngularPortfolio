import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private router: Router) {}

  navigateToProjectPage(projectName: string) {
    // Use the Angular Router to navigate to the corresponding project page
    this.router.navigate(['projects', projectName]);
  }

  getProjectImage(title: string): string {
    const firstWord = title.split(' ')[0]; // Get the first word from the project title
    return `assets/${firstWord}.png`; // Return the dynamic image path
  }
}
