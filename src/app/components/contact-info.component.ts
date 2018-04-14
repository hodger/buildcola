import { Component, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Author } from '../models/author.model';

@Component({
    selector: 'buildcola-contact',
    templateUrl: '../templates/contact-info.component.html',
    styleUrls: ['../style/contact-info.component.css']
})
export class ContactInfoComponent {
    title: string;
    contact: Author = null;

    constructor(
      public dialogRef: MatDialogRef<ContactInfoComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Author) {
        this.title = data['title'];
        this.contact = data['contact'];
      }

    onNoClick(): void {
      this.dialogRef.close();
    }

}
