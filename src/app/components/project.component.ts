import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';

import { ContactInfoComponent } from './contact-info.component';

import { ProjectAPIService } from '../services/project-api.service';
import { UserDataService } from '../services/user-data.service';

// models
import { Project } from '../models/project.model';

@Component({
  selector: 'buildcola-project',
  templateUrl: '../templates/project.component.html',
  styleUrls: ['../style/project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;

  lineageProjects: Project[] = [];
  displayLineage = false;

  @Output() build: EventEmitter<Project> = new EventEmitter<Project>();

  constructor(public dialog: MatDialog, 
              private projectAPI: ProjectAPIService,
              private userData: UserDataService,
              private snackBar: MatSnackBar) {}
  ngOnInit() {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

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

  getLineage(): void {
    this.project.lineage.map(id => {
      this.lineageProjects.push(this.projectAPI.projects[id]);
    });
    this.displayLineage = true;
  }

  requestBuildOff(): void {
    this.build.emit(this.project);
    this.project.forkedCount++;
    this.openSnackBar("You're awesome!", "Thanks, I know");
  }

  join() {
    this.userData.joinProject(this.project);
    this.openSnackBar("Added to 'My Projects' tab.", "Great!");
  }
}
