import { Member, mapMember } from "@/shared/models/member.model";

const CLUBS: Member[] = [
    // Replace this by the API call to gather all the clubs.
    {
        //
        nom     : "Nom Prenom",
        photo   : "/fillingPic.gif",
        fonction: "Fonction",
        email   : "nom.prenom@universite-paris-saclay.fr",
    },
    {
        //
        nom     : "Nom Prenom",
        photo   : "/fillingPic.gif",
        fonction: "Fonction",
        email   : "nom.prenom@universite-paris-saclay.fr",
    },
    {
        //
        nom     : "Nom Prenom",
        photo   : "/fillingPic.gif",
        fonction: "Fonction",
        email   : "nom.prenom@universite-paris-saclay.fr",
    },
];

export async function getMembers(): Promise<Member[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");

    return CLUBS.map((club) => { return mapMember(club); });
}
