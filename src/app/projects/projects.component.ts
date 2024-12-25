import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { CommonModule } from '@angular/common';
import { Project } from '../../_models/Projects'; 
import { Tag } from '../../_models/tag';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule, ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    new Project(
      1,
      'Delivery Management System',
      'Developed a database management system for delivery tracking using PostgreSQL and an interactive web interface with PHP, HTML, CSS, and JavaScript.',
      [Tag.POSTGRESQL, Tag.PHP, Tag.HTML, Tag.CSS, Tag.JAVASCRIPT],
      '', // Lien à ajouter plus tard
      '' // Image à ajouter plus tard
    ),
    new Project(
      2,
      'Drone Delivery System',
      'Designed and implemented a drone delivery system using Python and graph algorithms to optimize delivery routes.',
      [Tag.PYTHON],
      '', // Lien à ajouter plus tard
      '' // Image à ajouter plus tard
    ),
    new Project(
      3,
      'Music Recommendation System',
      'Built a music recommendation system using Spotify’s database and Python, providing song recommendations based on user preferences.',
      [Tag.PYTHON, Tag.SQL],
      '', // Lien à ajouter plus tard
      '' // Image à ajouter plus tard
    ),
    new Project(
      4,
      'Megalopolis Game Features',
      'Programmed various game mechanics and features for Megalopolis using TypeScript, focusing on scalability and user experience.',
      [Tag.TYPESCRIPT],
      '', // Lien à ajouter plus tard
      '' // Image à ajouter plus tard
    ),
    new Project(
      5,
      'Splendor & Carcassonne Game Development',
      'Developed key features for the board games Splendor and Carcassonne in C, with a focus on game logic and performance optimization.',
      [Tag.C],
      '', // Lien à ajouter plus tard
      '' // Image à ajouter plus tard
    )
  ];
  
}
