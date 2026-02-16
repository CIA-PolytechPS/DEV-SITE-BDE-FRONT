import { Member, mapMember } from "@/shared/models/member.model";

const MEMBERS: Member[] = [
    {
        nom     : "Nom Prenom",
        photo   : "/fillingPic.gif",
        fonction: "Fonction",
        email   : "nom.prenom@universite-paris-saclay.fr",
    },
    {
        nom     : "Nom Prenom",
        photo   : "/fillingPic.gif",
        fonction: "Fonction",
        email   : "nom.prenom@universite-paris-saclay.fr",
    },
    {
        nom     : "Nom Prenom",
        photo   : "/fillingPic.gif",
        fonction: "Fonction",
        email   : "nom.prenom@universite-paris-saclay.fr",
    },
];

export async function getMembers(): Promise<Member[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");

    return MEMBERS.map((member) => { return mapMember(member); });
}
