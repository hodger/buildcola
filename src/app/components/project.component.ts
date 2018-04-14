import { Component, OnInit, Input } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { ContactInfoComponent } from './contact-info.component';

// models
import { Project } from '../models/project.model';

@Component({
  selector: 'buildcola-project',
  templateUrl: '../templates/project.component.html',
  styleUrls: ['../style/project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;

  constructor(public dialog: MatDialog) {}
  ngOnInit() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactInfoComponent, {
      width: '40%',
      data: {
        title: this.project.title,
        contact: this.project.author
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
