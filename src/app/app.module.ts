import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { HomePageComponent } from './home-page/home-page.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { BarreDeProgressionComponent } from './barre-de-progression/barre-de-progression.component';
import { majPourcentage } from './maj-pourcentage.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    QuestionnaireComponent,
    BarreDeProgressionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [majPourcentage],
  bootstrap: [AppComponent]
})
export class AppModule { }
