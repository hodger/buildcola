import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// models
import { Project } from '../models/project.model';
import { Author } from '../models/author.model';

@Injectable()
export class ProjectAPIService {
    defaultAuthor: Author = new Author('Ryan Hodge', 'ryanwalterhodge@gmail.com', '5137062868', 'USC');
    secondAuthor: Author = new Author('Not Ryan', 'not-ryan@gmail.com', '5137062868', 'USC');
    projects: Project[] = [
        new Project('Clean up the river walk', this.secondAuthor, ['volunteering', 'physical'],
                    'Help us clean up the river!', null, 'http://visitcaycewestcolumbia.com/wp-content/uploads/2015/06/ResizeImage-1.jpeg'),
        new Project('Lead a free Git workshop', this.defaultAuthor, ['code', 'volunteering'],
                    'Help us clean up code!', 'https://github.com'),
        new Project('Build a canoe launch in Cayce', this.defaultAuthor, ['volunteering', 'physical', 'construction'],
                    'People should easily be able to canoe in the river.', null, null, [0, 1])
    ];

    /**
     * Get mock data for all projects, replace with API call
     */
    getProjects(tags: string[] = [], authorEmail: string = null): Set<Project> {
        if (tags.length === 0) {
            tags = this.getDistinctTags();
        }
        const data: Set<Project> = new Set<Project>();
        for (let i = 0; i < tags.length; i++) {
            for (let j = 0; j < this.projects.length; j++) {
                if (this.projects[j].tags.indexOf(tags[i]) > -1) {
                    if (authorEmail !== null && authorEmail !== this.projects[j].author.email) {
                        continue;
                    }
                    data.add(this.projects[j]);
                }
            }
        }
        return data;
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

    getProjectsBasedOnUser(email: string) {
        const userProjects = Array.from(this.getProjects([], email));
        const userProjectIds = userProjects.map(proj => this.projects.indexOf(proj));
        const based: Set<Project> = new Set();
        for (let i = 0; i < this.projects.length; i++) {
            for (let j = 0; j < userProjectIds.length; j++) {
                if (this.projects[i].lineage.indexOf(userProjectIds[j]) > -1) {
                    based.add(this.projects[i]);
                }
            }
        }
        return Array.from(based);
    }
}
