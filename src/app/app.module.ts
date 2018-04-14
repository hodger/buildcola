import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MatTabsModule, MatButtonModule, MatCardModule,
         MatIconModule, MatSelectModule, MatFormFieldModule,
         MatOptionModule, MatDialogModule, MatStepperModule,
         MatTooltipModule, MatSnackBarModule } from '@angular/material';

// app-level components
import { AppComponent } from './app.component';
import { ProjectComponent } from './components/project.component';
import { PlannerComponent } from './components/planner.component';
import { ProjectFeedComponent } from './components/project-feed.component';
import { ContactInfoComponent } from './components/contact-info.component';
import { MyProjectsComponent } from './components/my-projects.component';

// app-level services
import { ProjectAPIService } from './services/project-api.service';
import { UserDataService } from './services/user-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    PlannerComponent,
    ProjectFeedComponent,
    ContactInfoComponent,
    MyProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatDialogModule,
    MatStepperModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  providers: [ProjectAPIService, UserDataService],
  bootstrap: [AppComponent],
  entryComponents: [ContactInfoComponent]
})
export class AppModule { }
