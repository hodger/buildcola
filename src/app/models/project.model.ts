import { User } from './user.model';

export class Project {
    title: string;
    tags: string[];
    participantCount: number;
    participants: User[];
    description: string;
    weblink: string;

    constructor(title, tags, description, weblink) {
        this.title = title;
        this.tags = tags;
        this.description = description;
        this.weblink = weblink;
    }
}
