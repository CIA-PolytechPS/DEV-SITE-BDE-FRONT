import { Event, mapEvents } from "@/shared/models/event.model";

const EVENTS: Event[] = [
    // Replace this by the API call to gather all the clubs.
    {
        id            : 0,
        organisator   : "BDE",
        name          : "Nom",
        photo         : "/fillingPic.gif",
        nbparticipants: 100,
        startdate     : new Date("2026-02-01"),
        enddate       : new Date("2026-02-01"),
        place         : "B007",
        description   : "description",
    },
    {
        id            : 1,
        organisator   : "BDE",
        name          : "Nom",
        photo         : "/fillingPic.gif",
        nbparticipants: 100,
        startdate     : new Date("2026-02-02"),
        enddate       : new Date("2026-02-02"),
        place         : "B007",
        description   : "description",
    },
    {
        id            : 2,
        organisator   : "BDE",
        name          : "Nom",
        photo         : "/fillingPic.gif",
        nbparticipants: 100,
        startdate     : new Date("2026-02-04"),
        enddate       : new Date("2026-02-04"),
        place         : "B007",
        
        // eslint-disable-next-line @stylistic/max-len
        description: "🎉 Présentation de l'événement : Week-end d'intégration\n\n🗓️ Qu'est-ce que le Week-end d'intégration ?\n\nLe Week-end d'intégration (WEI) est un événement festif et convivial organisé en début d'année universitaire pour accueillir les nouveaux étudiants. C’est l’occasion idéale de créer des liens, de découvrir l’esprit de l’école ou de l’université, et de démarrer l’année sur une note positive et collective.\n\n![image info](/fillingPic.gif)\n🎯 Objectifs\n\nFavoriser l’intégration des nouveaux arrivants\nCréer une cohésion entre les promotions\nPrésenter les associations étudiantes et les valeurs de l’établissement\nOffrir un moment de détente et de fun après la rentrée\n\n📍 Déroulement\n\nLe WEI se déroule généralement sur un week-end (du vendredi soir au dimanche après-midi) dans un lieu dédié (centre de vacances, camping, domaine privatisé). Il comprend :\nAnimations et jeux collectifs : olympiades, défis, escape games, etc.\nSoirées à thème : déguisements, DJ sets, spectacles\nActivités sportives et ludiques : piscine, beach-volley, karaoké\nTemps d’échange : présentation des associations, discussions informelles\n\n👥 Pour qui ?\n\nTous les étudiants de première année sont invités, ainsi que les membres des promotions supérieures qui encadrent et animent l’événement. Aucun prérequis, juste l’envie de participer et de s’amuser !\n\n🛡️ Sécurité et encadrement\n\nL’événement est encadré par des responsables formés, avec des règles claires pour garantir la sécurité et le respect de chacun. Des dispositifs de prévention sont mis en place (médecins, référents, transports sécurisés).\n",
    },
    {
        id            : 3,
        organisator   : "BDE",
        name          : "Nom",
        photo         : "/fillingPic.gif",
        nbparticipants: 100,
        startdate     : new Date("2026-02-05"),
        enddate       : new Date("2026-02-06"),
        place         : "B007",
        description   : "description",
    },
    {
        id            : 4,
        organisator   : "BDE",
        name          : "Nom",
        photo         : "/fillingPic.gif",
        nbparticipants: 100,
        startdate     : new Date("2026-02-10"),
        enddate       : new Date("2026-02-11"),
        place         : "B007",
        description   : "description",
    },
];

export async function getListEvents(): Promise<Event[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");

    return EVENTS.map((event) => { return mapEvents(event); });
}

export async function getListFutureEvents(): Promise<Event[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");

    return EVENTS.map((event) => { return mapEvents(event); }).filter((event) => { return event.enddate > new Date(); });
}

export async function getEvent(id: number): Promise<Event | null> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");

    const data = EVENTS.map((event) => { return mapEvents(event); }).filter((event) => { return event.id == id; });

    return data[0] ?? null;
}

