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
  
}
