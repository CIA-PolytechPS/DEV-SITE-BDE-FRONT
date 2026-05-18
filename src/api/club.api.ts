import { Club, mapClub } from "@/shared/models/club.model";

const CLUBS: Club[] = [
    {
        id         : 1,
        name       : "CIA",
        short_name : "cia",
        place_id   : 1,
        logo       : "/images/fillingPic.gif",
        banner     : "/images/fillingPic.gif",
        color      : "#ff0000",
        alpha      : 0.5,
        description: "Le CIA c'est génial et on fait plein de trucs cools donc venez !",
    },
    {
        id         : 2,
        name       : "BDE",
        short_name : "bde",
        place_id   : 1,
        logo       : "/images/fillingPic.gif",
        banner     : "/images/fillingPic.gif",
        color      : "#00ff00",
        alpha      : 0.7,
        description: "Le BDE c'est moins bien que le CIA mais c'est bien aussi !",
    },
];

export async function getAllClubs(): Promise<Club[]> {
    await fetch("http://localhost:3000/logo192.png");
    
    return CLUBS.map(mapClub);
}

export async function getClubByShortName(short_name: string): Promise<Club | undefined> {
    await fetch("http://localhost:3000/logo192.png");
    
    const raw_club = CLUBS.find((c) => { return c.short_name === short_name; });

    return raw_club ? mapClub(raw_club) : undefined;
}

export async function getClubById(id: number): Promise<Club | undefined> {
    await fetch("http://localhost:3000/logo192.png");
    
    const raw_club = CLUBS.find((c) => { return c.id === id; });

    return raw_club ? mapClub(raw_club) : undefined;
}
