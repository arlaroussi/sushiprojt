import { StructureBox } from "./StructureBox";

export class Box implements StructureBox {
    constructor(
        public id: number,
        public nom: string,
        public pieces: number,
        public prix: number,
        public image: string,
        public aliments: {
            nom: string,
            quantite: number,
        }[],
        public saveurs: string[]
    ) {}
}
