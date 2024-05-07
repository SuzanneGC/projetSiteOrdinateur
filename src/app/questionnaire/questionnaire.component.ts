import { Component , OnInit } from '@angular/core';
import { majPourcentage } from '../maj-pourcentage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.css'
})
export class QuestionnaireComponent implements OnInit {
  liste_question = [  
    "Souhaitez-vous un ordinateur portable ou fixe ?",
    "Quel usage en ferez-vous ?",
    "Quelle réparabilité minimum souhaitez-vous pour votre ordinateur ?",
    "Quels types de ports minimum voulez-vous sur votre ordinateur ?",
    "Quelle(s) taille(s) d'écran souhaitez-vous ?",
    "A quelle fréquence allez-vous déplacer votre ordinateur ?",
    "Combien de temps doit durer une charge d'ordinateur au minimum ?",
    "A quel point les graphismes sont-ils importants pour vous ?",
    "Le son est-il important pour vous ?"
  ]

  liste_reponses = [
    ["Portable", "Fixe"],
    ["Bureautique", "Dessin", "Traitement d'image", "Traitement vidéo","Programmation","Gaming"],
    ["0 à 2 (très peu réparable)", "2 à 4", "4 à 6", "6 à 8", "8 à 10 (très réparable)"],
    ["HDMI", "USB-C", "USB-A", "Prise-jack"],
    ["Petit", "Moyen", "Grand"],
    ["Rarement", "De temps en temps", "Régulièrement","Quotidiennement"],
    ["6 h", "12 h", "18 h", "24 h", "Sans importance"],
    ["Peu importants", "Importants", "Très importants"],
    ["Peu importants", "Importants", "Très importants"]
  ]

  numeroQuestion = 1 ;
  nombreQuestions = this.liste_question.length ;
  pourcentage = (this.numeroQuestion / this.nombreQuestions) * 100;
  reponsePremiereQuestion: string = '';

  constructor(private majPourcentageService : majPourcentage, private router: Router){}

  createCheckboxes(): void {
    const divCheckboxes = document.getElementById('checkboxes-container');
    if (divCheckboxes == null) {
      console.error("L'élément avec l'identifiant 'checkboxes-container' n'a pas été trouvé.");
  } else {
      divCheckboxes.innerHTML = '';

      const reponses = this.liste_reponses[this.numeroQuestion - 1];

      for (let i = 0; i < reponses.length; i++) {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.value = reponses[i];

          const label = document.createElement('label');
          label.appendChild(checkbox);
          label.appendChild(document.createTextNode(reponses[i]));

          divCheckboxes.appendChild(label);
      }
  }
}

  createRadio(): void {
    const divRadio = document.getElementById('checkboxes-container');
    if (divRadio == null) {
      console.error("L'élément avec l'identifiant 'checkboxes-container' n'a pas été trouvé.");
    } else {
      divRadio.innerHTML = '';

      const reponses = this.liste_reponses[this.numeroQuestion - 1];

      for (let i = 0; i < reponses.length; i++) {
          const radio = document.createElement('input');
          radio.type = 'radio';
          radio.value = reponses[i];
          radio.name = "reponse"

          if (this.numeroQuestion === 1){
            radio.classList.add("premiereReponse") ;
            radio.addEventListener('change', (event) => {
              const target = event.target as HTMLInputElement;
              this.reponsePremiereQuestion = target.value;
          });
          }

          const label = document.createElement('label');
          label.appendChild(radio);
          label.appendChild(document.createTextNode(reponses[i]));

          divRadio.appendChild(label);
      }
    }
  }

  typeReponse(){
    if (this.numeroQuestion === 1 || this.numeroQuestion === 3 ||this.numeroQuestion === 6 || this.numeroQuestion === 7 || this.numeroQuestion === 8 || this.numeroQuestion === 9){
      this.createRadio();
    }
    else{
      this.createCheckboxes();}
  }

  incrCompteur() {
    this.numeroQuestion++;

    if (this.reponsePremiereQuestion != "Portable"){
      this.nombreQuestions = 4 ;
    }
    else{this.nombreQuestions = this.liste_question.length ;}
    
    this.pourcentage = (this.numeroQuestion / this.nombreQuestions) * 100;
    this.majPourcentageService.mettreAJourPourcentage(this.pourcentage);  

    if ((this.reponsePremiereQuestion === "Portable" && this.numeroQuestion <= this.liste_question.length) || this.numeroQuestion <= 3)
      {this.typeReponse();}
    else{this.router.navigate(['/']);;}
  }

  decrCompteur(){
    this.numeroQuestion--;
    this.pourcentage = (this.numeroQuestion / this.nombreQuestions) * 100;
    this.majPourcentageService.mettreAJourPourcentage(this.pourcentage);  
    if (this.numeroQuestion > 0)
      {this.typeReponse();}
    else{this.router.navigate(['/']);;}
  }

  ngOnInit(){
    const radiosPremiereQuestion = document.querySelectorAll('.premiereReponse');
    radiosPremiereQuestion.forEach(radio => {
      radio.addEventListener('change', (event) => {
        const target = event.target as HTMLInputElement;
        this.reponsePremiereQuestion = target.value;
      });
    });
  }

}

