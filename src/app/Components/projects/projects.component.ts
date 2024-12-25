import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Project 1',
      photo: 'assets/images/project1.jpg', // Add your image in the assets/images folder
      day: 1,
      liveDemo: 'https://example.com/demo1',
      sourceCode: 'https://github.com/yourusername/project1',
    },
    {
      name: 'Project 2',
      photo: 'assets/images/project2.jpg',
      day: 2,
      liveDemo: 'https://example.com/demo2',
      sourceCode: 'https://github.com/yourusername/project2',
    },
    {
      name: 'Project 3',
      photo: 'assets/images/project3.jpg',
      day: 3,
      liveDemo: 'https://example.com/demo3',
      sourceCode: 'https://github.com/yourusername/project3',
    },
    {
      name: 'Project 4',
      photo: 'assets/images/project3.jpg',
      day: 3,
      liveDemo: 'https://example.com/demo3',
      sourceCode: 'https://github.com/yourusername/project3',
    },
    // Add more projects as needed
  ];
}
