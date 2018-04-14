import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

// services
import { ProjectAPIService } from '../services/project-api.service';

// models
import { Project } from '../models/project.model';

@Component({
    selector: 'buildcola-feed',
    templateUrl: '../templates/project-feed.component.html',
    styleUrls: ['../style/project-feed.component.css']
})
export class ProjectFeedComponent implements OnInit, OnChanges {
    @Input() tags: string[] = [];
    @Input() authorEmail: string = null;
    @Output() build: EventEmitter<Project> = new EventEmitter<Project>();

    feedProjects: Set<Project>;
    chosenTags = '';

    constructor(private projectAPI: ProjectAPIService) {}

    ngOnInit() {
        this.initProjects();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.hasOwnProperty('tags') && changes['tags'].hasOwnProperty('previousValue')) {
            if (changes['tags'].currentValue !== changes['tags'].previousValue) {
                this.initProjects();
            }
        }
    }

    initProjects() {
        this.feedProjects = this.projectAPI.getProjects(this.tags, this.authorEmail);
        if (this.tags.length === 0) {
            this.chosenTags = 'all';
        } else {
            this.chosenTags = this.tags.join(' & ');
        }
    }

    requestEditorWithLineage(project: Project) {
        this.build.emit(project);
    }
}
