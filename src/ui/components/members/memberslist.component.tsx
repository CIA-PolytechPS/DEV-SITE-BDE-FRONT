import { FC, ReactNode } from "react";
import MemberCard from "./membercard.component";


export interface Member {
    nom        : string;
    photo      : string;
    fonction   : string;
    description: string;
    email      : string;
}

const CLUBS: Member[] = [
    // Replace this by the API call to gather all the clubs.
    {
        //
        nom        : "Nom Prenom",
        photo      : "/fillingPic.gif",
        fonction   : "Fonction",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio  velit, venenatis faucibus diam sit amet, tempor efficitur mauris.
                          Integer congue nulla ex, in ornare risus volutpat sed. Sed dignissim  vulputate erat, sit amet hendrerit nulla efficitur sit amet.
                          Duis vitae  purus a nunc condimentum sagittis quis vitae nulla. Ut eget pharetra  purus. Vestibulum hendrerit scelerisque porta. Suspendisse in hendrerit nibh. Fusce id  scelerisque urna.
                          Aliquam ultricies magna nec laoreet bibendum. Sed  pellentesque mi risus, ac lacinia mi blandit sed.`,
        email: "nom.prenom@universite-paris-saclay.fr",
    },
    {
        //
        nom        : "Nom Prenom",
        photo      : "/fillingPic.gif",
        fonction   : "Fonction",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio  velit, venenatis faucibus diam sit amet, tempor efficitur mauris.
                          Integer congue nulla ex, in ornare risus volutpat sed. Sed dignissim  vulputate erat, sit amet hendrerit nulla efficitur sit amet.
                          Duis vitae  purus a nunc condimentum sagittis quis vitae nulla. Ut eget pharetra  purus. Vestibulum hendrerit scelerisque porta. Suspendisse in hendrerit nibh. Fusce id  scelerisque urna.
                          Aliquam ultricies magna nec laoreet bibendum. Sed  pellentesque mi risus, ac lacinia mi blandit sed.`,
        email: "nom.prenom@universite-paris-saclay.fr",
    },
    {
        //
        nom        : "Nom Prenom",
        photo      : "/fillingPic.gif",
        fonction   : "Fonction",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio  velit, venenatis faucibus diam sit amet, tempor efficitur mauris.
                          Integer congue nulla ex, in ornare risus volutpat sed. Sed dignissim  vulputate erat, sit amet hendrerit nulla efficitur sit amet.
                          Duis vitae  purus a nunc condimentum sagittis quis vitae nulla. Ut eget pharetra  purus. Vestibulum hendrerit scelerisque porta. Suspendisse in hendrerit nibh. Fusce id  scelerisque urna.
                          Aliquam ultricies magna nec laoreet bibendum. Sed  pellentesque mi risus, ac lacinia mi blandit sed.`,
        email: "nom.prenom@universite-paris-saclay.fr",
    },
];

const MembersListComp: FC = (): ReactNode => {
    return (
        <>
            <div className="w-4/5 m-[2%]">
                <div className="w-full">
                    <h1 className="underline text-5xl font-semibold">Les Membres du Bureau</h1>
                </div>

                <div className="mt-[3%]">
                    {CLUBS.map((club) => {
                        return <MemberCard key={club.nom} {...club} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default MembersListComp;
