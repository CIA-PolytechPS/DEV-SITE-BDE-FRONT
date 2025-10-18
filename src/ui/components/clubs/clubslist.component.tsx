import { FC, ReactNode } from "react";
import ClubCard from "./clubscard.component";

export interface Club {
    nom        : string;
    logo       : string;
    description: string;
}

const CLUBS: Club[] = [
    // Replace this by the API call to gather all the clubs.
    {
        //
        nom        : "CIA (Club d'Info et Algo)",
        logo       : "/fillingPic.gif",
        description: `Vous aimez l'informatique et l'algorithmique et vous désirez aller plus loin que les notions abordées en cours dans ces domaines ? Alors le CIA (Club d'Informatique et d'Algorithmique) est l'endroit idéal pour vous.
Le CIA propose des activités diverses et variées dans un cadre convivial pour ses membres, avec notamment des projets tels que la création d'une
application d'emploi du temps pour Polytech, des défis de programmation comme des hackathons, ou encore la possibilité de participer à des concours internationaux tels que le SWERC, ou nationaux tels que Prologin.

Pour plus de détails, vous pouvez nous contacter via notre mail, sur le Discord du CIA, et nous retrouver tous les jeudis à partir de 14h en salle B007 du bâtiment 620 !`,
    },
    {
        nom        : "CIA (Club d'Info et Algo)",
        logo       : "/fillingPic.gif",
        description: `Vous aimez l'informatique et l'algorithmique et vous désirez aller plus loin que les notions abordées en cours dans ces domaines ? Alors le CIA (Club d'Informatique et d'Algorithmique) est l'endroit idéal pour vous.
Le CIA propose des activités diverses et variées dans un cadre convivial pour ses membres, avec notamment des projets tels que la création d'une
application d'emploi du temps pour Polytech, des défis de programmation comme des hackathons, ou encore la possibilité de participer à des concours internationaux tels que le SWERC, ou nationaux tels que Prologin.

Pour plus de détails, vous pouvez nous contacter via notre mail, sur le Discord du CIA, et nous retrouver tous les jeudis à partir de 14h en salle B007 du bâtiment 620 !`,
    },
    {
        nom        : "CIA (Club d'Info et Algo)",
        logo       : "/fillingPic.gif",
        description: `Vous aimez l'informatique et l'algorithmique et vous désirez aller plus loin que les notions abordées en cours dans ces domaines ? Alors le CIA (Club d'Informatique et d'Algorithmique) est l'endroit idéal pour vous.
Le CIA propose des activités diverses et variées dans un cadre convivial pour ses membres, avec notamment des projets tels que la création d'une
application d'emploi du temps pour Polytech, des défis de programmation comme des hackathons, ou encore la possibilité de participer à des concours internationaux tels que le SWERC, ou nationaux tels que Prologin.

Pour plus de détails, vous pouvez nous contacter via notre mail, sur le Discord du CIA, et nous retrouver tous les jeudis à partir de 14h en salle B007 du bâtiment 620 !`,
    },
];

const ClubsListComp: FC = (): ReactNode => {
    return (
        <>
            <div className="w-4/5 m-[2%]">
                <div className="w-full">
                    <h1 className="underline text-5xl font-semibold">Clubs</h1>
                </div>

                <div className="mt-[3%]">
                    {CLUBS.map((club) => {
                        return <ClubCard key={club.nom} {...club} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default ClubsListComp;
