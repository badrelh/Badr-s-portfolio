import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../_models/Projects';
import { Tag } from '../../_models/tag';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})


export class ProjectCardComponent {
  // @Input() projectName: string="" ;
  // @Input() projectDescription: string="";
  // @Input() projectfooter: string[] =[ "Angular", "HTML", "CSS"];
  // @Input() projectLink: string="";
  @Input() project ={} as Project;

  @Input() index!: number;

}
