import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MatTabsModule, MatButtonModule, MatCardModule,
         MatIconModule, MatSelectModule, MatFormFieldModule,
         MatOptionModule } from '@angular/material';

// app-level components
import { AppComponent } from './app.component';
import { ProjectComponent } from './components/project.component';
import { PlannerComponent } from './components/planner.component';
import { ProjectFeedComponent } from './components/project-feed.component';

// app-level services
import { ProjectAPIService } from './services/project-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    PlannerComponent,
    ProjectFeedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule
  ],
  providers: [ProjectAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
