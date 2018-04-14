import { Component, OnInit } from '@angular/core';

import { ProjectAPIService } from './services/project-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  chosenTags: string[] = [];
  availableTags: string[] = [];

  constructor(private projectAPI: ProjectAPIService) {}

  ngOnInit() {
    this.availableTags = this.projectAPI.getDistinctTags();
  }
}
