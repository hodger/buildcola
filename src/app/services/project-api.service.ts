import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// models
import { Project } from '../models/project.model';
import { Author } from '../models/author.model';

@Injectable()
export class ProjectAPIService {
    defaultAuthor: Author = new Author('Ryan Hodge', 'ryanwalterhodge@gmail.com', '5137062868', 'USC');
    projects: Project[] = [
        new Project('Clean up the river walk', this.defaultAuthor, ['volunteering', 'physical'],
                    'Help us clean up the river!', null, 'http://visitcaycewestcolumbia.com/wp-content/uploads/2015/06/ResizeImage-1.jpeg'),
        new Project('Lead a free Git workshop', this.defaultAuthor, ['code', 'volunteering'],
                    'Help us clean up code!', 'https://github.com')
    ];

    /**
     * Get mock data for all projects, replace with API call
     */
    getProjects(tags: string[] = []): Set<Project> {
        if (tags.length === 0) {
            return new Set<Project>(this.projects);
        } else {
            const data: Set<Project> = new Set<Project>();
            for (let i = 0; i < tags.length; i++) {
                for (let j = 0; j < this.projects.length; j++) {
                    if (this.projects[j].tags.indexOf(tags[i]) > -1) {
                        data.add(this.projects[j]);
                    }
                }
            }
            return data;
        }
    }

    getDistinctTags(): string[] {
        const tags = new Set();
        this.projects.map(proj => {
            for (let i = 0; i < proj.tags.length; i++) {
                tags.add(proj.tags[i]);
            }
        });
        return Array.from(tags);
    }
}
