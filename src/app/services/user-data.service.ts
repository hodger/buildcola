import {Injectable} from '@angular/core';

@Injectable()
export class UserDataService {

    // Mock data
    getCurrentUser() {
        return {
            email: 'ryanwalterhodge@gmail.com',
            username: 'hodger'
        };
    }
}
