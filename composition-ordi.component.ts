import { Component } from '@angular/core';
// Récupération des éléments div par leur id
const composant1 = document.getElementById('composant1');
const composant2 = document.getElementById('composant2');
const composant3 = document.getElementById('composant3');
const descriptionDiv = document.getElementById('description');

@Component({
    selector: 'app-composition-ordi',
    templateUrl: './composition-ordi.component.html',
    styleUrl: './composition-ordi.component.css'
  })

export class Composants {
  
}


// Ajout d'un gestionnaire d'événement clic pour le composant 1
composant1?.addEventListener('click', () => {
    // Afficher le texte correspondant au composant 1
    descriptionDiv.textContent = "Description du Composant 1";
});

// Ajout d'un gestionnaire d'événement clic pour le composant 2
composant2?.addEventListener('click', () => {
    // Afficher le texte correspondant au composant 2
    descriptionDiv.textContent = "Description du Composant 2";
});

// Ajout d'un gestionnaire d'événement clic pour le composant 3
composant3?.addEventListener('click', () => {
    // Afficher le texte correspondant au composant 3
    descriptionDiv.textContent = "Description du Composant 3";
});

// Fermer la description lorsqu'un composant est cliqué à nouveau
function fermerDescription() {
    descriptionDiv.textContent = ""; // Effacer le texte
}

// Gestion du clic sur n'importe quel composant pour fermer la description
document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('composant')) {
        // Si le clic n'est pas sur un composant, fermer la description
        fermerDescription();
    }
});
