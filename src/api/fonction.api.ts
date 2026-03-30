import { Fonction, mapFonction } from "@/shared/models/fonction.model";

const FONCTIONS: Fonction[] = [
    {
        id       : 1,
        name     : "Nom Prenom",
        group_id : 1,
        parent_id: 1,
    },
    {
        id       : 2,
        name     : "Nom Prenom",
        group_id : 2,
        parent_id: 1,
    },
    {
        id       : 3,
        name     : "Nom Prenom",
        group_id : 1,
        parent_id: 4,
    },
];

export async function getFonctions(): Promise<Fonction[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");

    return FONCTIONS.map(mapFonction);
}
