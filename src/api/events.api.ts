import { Events, mapEvents } from "@/shared/models/events.model";

const CLUBS: Events[] = [
    // Replace this by the API call to gather all the clubs.
    {
        //
        nom        : "nom",
        photo      : "/fillingPic.gif",
        fonction   : "Fonction",
        description: "description",
    },
    {
        //
        nom        : "nom",
        photo      : "/fillingPic.gif",
        fonction   : "Fonction",
        description: "description",
    },
    {
        //
        nom        : "nom",
        photo      : "/fillingPic.gif",
        fonction   : "Fonction",
        description: "description",
    },
];

export async function getEvents(): Promise<Events[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");

    return CLUBS.map((club) => { return mapEvents(club); });
}
