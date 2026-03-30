import { Place, mapPlace } from "@/shared/models/place.model";

const PLACES: Place[] = [
    {
        id    : 1,
        name  : "B007",
        adress: "Bâtiment 620, Université Paris-Saclay, 91400 Orsay",
    },
    {
        id    : 2,
        name  : "A101",
        adress: "Bâtiment 620, Université Paris-Saclay, 91400 Orsay",
    },
    {
        id    : 3,
        name  : "E103",
        adress: "Bâtiment 640, Université Paris-Saclay, 91400 Orsay",
    },
];

export async function getListPlaces(): Promise<Place[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");

    return PLACES.map(mapPlace);
}

export async function getPlace(id: number): Promise<Place | null> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");

    const data = PLACES.map(mapPlace).filter((place) => { return place.id == id; });

    return data[0] ?? null;
}
