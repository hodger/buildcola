import { Component, OnInit } from '@angular/core';

import { UserDataService } from '../services/user-data.service';

@Component({
    selector: 'buildcola-my-projects',
    templateUrl: '../templates/my-projects.component.html',
    styleUrls: ['../style/my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {
    currentUser: Object = {};

    constructor(private userData: UserDataService) {}
    ngOnInit() {
        this.currentUser = this.userData.getCurrentUser();
    }
}
