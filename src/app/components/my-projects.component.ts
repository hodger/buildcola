import { Component, OnInit } from '@angular/core';

import { UserDataService } from '../services/user-data.service';
import { ProjectAPIService } from '../services/project-api.service';
import { Project } from '../models/project.model';

@Component({
    selector: 'buildcola-my-projects',
    templateUrl: '../templates/my-projects.component.html',
    styleUrls: ['../style/my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {
    currentUser: Object = {};

    userBasedProjects: Project[] = [];

    constructor(private userData: UserDataService,
                private projectAPI: ProjectAPIService) {}
    ngOnInit() {
        this.currentUser = this.userData.getCurrentUser();
        // this.userBasedProjects = this.projectAPI.getProjectsBasedOnUser(this.currentUser['email']);
        console.log(this.userBasedProjects);
    }
}
