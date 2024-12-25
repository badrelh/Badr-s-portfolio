import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Tag } from '../../_models/tag';
import { Project } from '../../_models/Projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css' 
})
export class HomeComponent {
  projects: Project[] = [
    new Project(1, 'Project 1', 'Description 1', [Tag.HTML, Tag.CSS], 'https://github.com', 'path/to/picture.jpg'),
    new Project(2, 'Project 2', 'Description 2', [Tag.JAVASCRIPT, Tag.NODEJS], 'https://github.com', 'path/to/picture.jpg'),
    new Project(3, 'Project 3', 'Description 3', [Tag.PYTHON, Tag.SQL], 'https://github.com', 'path/to/picture.jpg')
  ];
}
