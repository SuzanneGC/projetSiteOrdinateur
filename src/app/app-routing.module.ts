import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

import { PropositionPageComponent } from './proposition-page/proposition-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'questionnaire', component: QuestionnaireComponent},
  { path: '', component: PropositionPageComponent},
  { path: 'proposition-page', component: PropositionPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
