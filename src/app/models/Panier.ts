import { StructurePanier } from "./StructurePanier";

export class Panier implements StructurePanier{
    constructor(
        public nom: string,
        public quantite: number,
        public prix: number,
    ){}
}
