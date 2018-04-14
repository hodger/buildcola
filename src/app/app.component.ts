import { Component, OnInit } from '@angular/core';

import { ProjectAPIService } from './services/project-api.service';
import { Project } from './models/project.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  chosenTags: string[] = [];
  availableTags: string[] = [];
  tabIndex = 0;

  focusedProject: Project = null;

  constructor(private projectAPI: ProjectAPIService) {}

  ngOnInit() {
    this.availableTags = this.projectAPI.getDistinctTags();
  }

  goToProjectCreator(project: Project = null) {
    this.focusedProject = project;
    console.log(project);
    this.tabIndex = 1;
  }
}
