import { User } from './user.model';
import { Author } from './author.model';

export class Project {
    title: string;
    tags: string[];
    participantCount: number;
    participants: User[];
    forkedCount = 0;
    description: string;
    weblink: string;
    imageLink: string;
    author: Author;

    lineage: number[];

    constructor(title='', author=null, tags=[], description='', 
                weblink = null, imageLink = null,
                lineage = []) {
        this.title = title;
        this.author = author;
        this.tags = tags;
        this.description = description;
        this.weblink = weblink;
        this.imageLink = imageLink;
        this.lineage = lineage;
    }
}
