import { Event, mapEvents } from "@/shared/models/event.model";

const CLUBS: Event[] = [
    // Replace this by the API call to gather all the clubs.
    {
        //
        nom         : "nom",
        photo       : "/fillingPic.gif",
        participants: 100,
        datedebut   : new Date(),
        datefin     : new Date(),
        lieu        : "B007",
        description : "description",
    },
    {
        //
        nom         : "nom",
        photo       : "/fillingPic.gif",
        participants: 100,
        datedebut   : new Date(),
        datefin     : new Date(),
        lieu        : "B007",
        description : "description",
    },
    {
        //
        nom         : "nom",
        photo       : "/fillingPic.gif",
        participants: 100,
        datedebut   : new Date(),
        datefin     : new Date(),
        lieu        : "B007",
        description : "description",
    },
    {
        //
        nom         : "nom",
        photo       : "/fillingPic.gif",
        participants: 100,
        datedebut   : new Date(),
        datefin     : new Date(),
        lieu        : "B007",
        description : "description",
    },
];

export async function getEvents(): Promise<Event[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");

    return CLUBS.map((club) => { return mapEvents(club); });
}
