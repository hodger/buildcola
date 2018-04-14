import { Component, OnInit, Input } from '@angular/core';

// services
import { ProjectAPIService } from '../services/project-api.service';

// models
import { Project } from '../models/project.model';

@Component({
    selector: 'buildcola-feed',
    templateUrl: '../templates/project-feed.component.html',
    styleUrls: ['../style/project-feed.component.css']
})
export class ProjectFeedComponent implements OnInit {
    @Input() tags: string[] = [];

    feedProjects: Set<Project>;
    chosenTags = '';

    constructor(private projectAPI: ProjectAPIService) {}

    ngOnInit() {
        this.feedProjects = this.projectAPI.getProjects(this.tags);
        if (this.tags.length === 0) {
            this.chosenTags = 'all';
        } else {
            this.chosenTags = this.tags.join(' & ');
        }
    }
}
