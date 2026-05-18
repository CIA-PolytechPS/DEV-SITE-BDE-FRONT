import { Place, mapPlace } from "@/shared/models/place.model";

const PLACES: Place[] = [
    {
        id     : 1,
        name   : "B007",
        address: "Bâtiment 620, Université Paris-Saclay, 91400 Orsay",
    },
    {
        id     : 2,
        name   : "A101",
        address: "Bâtiment 620, Université Paris-Saclay, 91400 Orsay",
    },
    {
        id     : 3,
        name   : "E103",
        address: "Bâtiment 640, Université Paris-Saclay, 91400 Orsay",
    },
];

export async function getAllPlaces(): Promise<Place[]> {
    await fetch("http://localhost:3000/logo192.png");

    return PLACES.map(mapPlace);
}

export async function getPlaceById(id: number): Promise<Place | null> {
    await fetch("http://localhost:3000/logo192.png");

    const raw_place = PLACES.find((place) => { return place.id === id; });

    return raw_place ? mapPlace(raw_place) : null;
}
