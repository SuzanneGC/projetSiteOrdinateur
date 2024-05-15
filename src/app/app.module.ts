import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  //checkbox

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { HomePageComponent } from './home-page/home-page.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { PropositionOrdinateurComponent } from './proposition-ordinateur/proposition-ordinateur.component';
import { PropositionPageComponent } from './proposition-page/proposition-page.component';
import { FiltreComposantComponent } from './filtre-composant/filtre-composant.component';
import { FiltreTriComponent } from './filtre-tri/filtre-tri.component';
import { FiltreUsageComponent } from './filtre-usage/filtre-usage.component';
import { MenuFiltresComponent } from './menu-filtres/menu-filtres.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    QuestionnaireComponent,
    PropositionOrdinateurComponent,
    PropositionPageComponent,
    FiltreComposantComponent,
    FiltreTriComponent,
    FiltreUsageComponent,
    MenuFiltresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
