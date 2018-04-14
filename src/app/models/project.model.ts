import { User } from './user.model';
import { Author } from './author.model';

export class Project {
    title: string;
    tags: string[];
    participantCount: number;
    participants: User[];
    description: string;
    weblink: string;
    imageLink: string;
    author: Author;

    constructor(title, author, tags, description, weblink, imageLink = null) {
        this.title = title;
        this.author = author;
        this.tags = tags;
        this.description = description;
        this.weblink = weblink;
        this.imageLink = imageLink;
    }
}
