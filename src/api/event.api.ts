import { Event, mapEvent } from "@/shared/models/event.model";

const EVENTS: Event[] = [
    {
        id            : 1,
        club_id       : 1,
        title         : "Soirée pizza",
        date          : new Date("2024-06-30T20:00:00"),
        place         : "Au Twenty",
        description   : "Venez manger des pizzas avec nous !",
        capacity      : 20,
        others        : "Apportez votre boisson !",
        image_location: "/images/fillingPic.gif",
    },
    {
        id            : 2,
        club_id       : 2,
        title         : "Entrainement SWERC",
        date          : new Date("2024-07-15T18:00:00"),
        place         : "Salle de sport",
        description   : "Faut s'entrainer vite vite !",
        capacity      : 16,
        others        : "Révisez Djikstra",
        image_location: "/images/fillingPic.gif",
    },
];

export async function getAllEvents(): Promise<Event[]> {
    await fetch("https://jsonplaceholder.typicode.com");

    return EVENTS.map(mapEvent);
}
