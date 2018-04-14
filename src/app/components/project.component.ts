import { Component, OnInit, Input } from '@angular/core';

// models
import { Project } from '../models/project.model';

@Component({
  selector: 'buildcola-project',
  templateUrl: '../templates/project.component.html',
  styleUrls: ['../style/project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;

  constructor() {}
  ngOnInit() {
    
  }
}
