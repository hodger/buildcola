import {Component, Input} from '@angular/core';

import {ProjectAPIService} from '../services/project-api.service';
import { Project } from '../models/project.model';
import { Author } from '../models/author.model';

@Component({
  selector: 'buildcola-planner',
  templateUrl: '../templates/planner.component.html',
  styleUrls: ['../style/planner.component.css']
})
export class PlannerComponent {
  @Input() lineageProject: Project;
  newAuthor: Author = new Author();
  newProject: Project = new Project();

  constructor(private projectAPI: ProjectAPIService) {}

  printAuthor() {
    console.log(this.newAuthor);
  }
}
