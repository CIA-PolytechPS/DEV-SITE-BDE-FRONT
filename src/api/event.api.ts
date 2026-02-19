import { Event, mapEvents } from "@/shared/models/event.model";

const CLUBS: Event[] = [
    // Replace this by the API call to gather all the clubs.
    {
        //
        id          : 1,
        name        : "name",
        photo       : "/fillingPic.gif",
        participants: 100,
        startdate   : new Date(2026, 5, 15, 10, 13, 15, 18),
        enddate     : new Date(2026, 5, 25, 12, 14, 16, 19),
        place       : "B007",
        description : "description",
    },
    {
        //
        id          : 2,
        name        : "name",
        photo       : "/fillingPic.gif",
        participants: 100,
        startdate   : new Date(),
        enddate     : new Date(),
        place       : "B007",
        description : "description",
    },
    {
        //
        id          : 69,
        name        : "name",
        photo       : "/fillingPic.gif",
        participants: 100,
        startdate   : new Date(),
        enddate     : new Date(),
        place       : "B007",
        description : "description",
    },
    {
        //
        id          : 67,
        name        : "name",
        photo       : "/fillingPic.gif",
        participants: 100,
        startdate   : new Date(),
        enddate     : new Date(),
        place       : "B007",
        description : "description",
    },
];

export async function getEvents(): Promise<Event[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");

    return CLUBS.map((club) => { return mapEvents(club); });
}
