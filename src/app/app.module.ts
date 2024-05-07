import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { HomePageComponent } from './home-page/home-page.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import {MatMenuModule} from '@angular/material/menu';
import { RapporterUnBugComponent } from './rapporter-un-bug/rapporter-un-bug.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    QuestionnaireComponent,
    RapporterUnBugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class VotreModule{ }
