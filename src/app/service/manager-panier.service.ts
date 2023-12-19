import { Injectable } from '@angular/core';
import { Box } from '../models/Box';
import { Panier } from '../models/Panier';


@Injectable({
  providedIn: 'root'
})
export class ManagerPanierService {
  private panier: Panier[] = [];

  constructor() { }

  getPanier(): Panier[] {
    return this.panier;
  }

  ajouterBoxAuPanier(box: Box){
    const index = this.panier.findIndex((element) => element.nom === box.nom);
    const nbBoxs = this.panier.reduce((total, panierBox) => total + panierBox.quantite, 0);

    if (nbBoxs >= 10){
      alert('Le nombre maximum de boîtes dans le panier est atteint !');
    } 
    else if (index !== -1) {
        this.panier[index].quantite++;
    } 
    else {
        const panierBox = new Panier(box.nom, 1, box.prix);
        this.panier.push(panierBox);
    }
  }

  miseAJourNombreBoxs(){
    return this.panier.reduce((total, panierBox) => total + panierBox.quantite, 0);

  }
}

