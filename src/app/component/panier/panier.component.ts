import { Component, OnInit } from '@angular/core';
import { Panier } from 'src/app/models/Panier';
import { ManagerPanierService } from 'src/app/service/manager-panier.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})

export class PanierComponent implements OnInit {
  panier: Panier[] = [];

  
  constructor(private managerPanierService: ManagerPanierService) { }

  ngOnInit(){
    this.panier = this.managerPanierService.getPanier();
  }

  getTotal(): number {
    return this.panier.reduce((total, panierBox) => total + panierBox.prix * panierBox.quantite, 0);
  }

  
  // Fonction pour augmenter la quantité d'un article dans le panier
  ajouterQuantite(box: Panier){
    const nbBoxs = this.panier.reduce((total, panierBox) => total + panierBox.quantite, 0);

    if (nbBoxs >= 10) {
      alert('Vous avez atteint la limite de quantité pour le panier !');
      return;
    }
    else{
      box.quantite++;
    }

  }

  // Fonction pour diminuer la quantité d'un article dans le panier
  diminuerQuantite(box: Panier){
    if (box.quantite > 1) { // On vérifie si la quantité est supérieure à 1
      box.quantite--; // On diminue la quantité
    }
    else if(box.quantite == 1){
      const nbBoxs = this.panier.reduce((total, panierBox) => total + panierBox.quantite, 0);
      if (nbBoxs == 1) {
        this.supprimerBox(box);
      }
      this.supprimerBox(box);
    } 
  }

  supprimerBox(box : Panier){
    const index = this.panier.findIndex((element) => element.nom === box.nom); // On cherche l'index de l'article dans le panier
    if (index !== -1) {
      this.panier.splice(index, 1); // On supprime l'article du panier
    }
  }

  // Fonction pour obtenir la quantité totale d'articles dans le panier
  getTotalQuantite(): number {
    return this.panier.reduce((total, panierBox) => total + panierBox.quantite, 0);
  }
}
