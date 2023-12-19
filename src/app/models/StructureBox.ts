/**
 * Représente la structure de données d'une box
 * L'id sera autogénéré par l'application (null si nouveau)
 */
export interface StructureBox { 
    id: number,
    nom: string,
    pieces: number,
    prix: number,
    image: string,
    aliments:{
        nom: string,
        quantite: number
    }[],
    saveurs: string[]
}
