import { Component } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.css'
})
export class QuestionnaireComponent {
  public compteur = 0 ;

  liste_question = [
    "Quel sera l'usage de votre ordinateur ?",
    "Avez-vous faim ?",
    "Voulez-vous un ordinateur portable ou fixe ?"
  ]



  incrCompteur() {
    this.compteur++;
  }
  decrCompteur(){
    this.compteur--;
  }
}
