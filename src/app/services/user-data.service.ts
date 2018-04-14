import {Injectable} from '@angular/core';
import { Project } from '../models/project.model';

@Injectable()
export class UserDataService {

    userJoinedProjects: Project[] = [];
    notifications: string[] = ['Someone built off your project!',
                                'A project you joined has been continued.'];

    // Mock data
    getCurrentUser() {
        return {
            email: 'ryanwalterhodge@gmail.com',
            username: 'hodger'
        };
    }

    joinProject(project: Project) {
        this.userJoinedProjects.push(project);
    }
}
