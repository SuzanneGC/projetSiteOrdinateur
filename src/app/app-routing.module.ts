import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { RapporterUnBugComponent } from './rapporter-un-bug/rapporter-un-bug.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'questionnaire', component: QuestionnaireComponent},
  { path: 'rapporter-un-bug', component: RapporterUnBugComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
