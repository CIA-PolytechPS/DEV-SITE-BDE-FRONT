import { Club, mapClub } from "@/shared/models/club.model";

const CLUBS: Club[] = [
    {
        id            : 1,
        name          : "CIA",
        short_name    : "cia",
        image_location: "/images/fillingPic.gif",
        description   : "Le CIA c'est génial et on fait plein de trucs cools donc venez !",
        board_members : "Maxime et Maxime et Maxime et Maxime",
        events        : [
            {
                id            : 1,
                club_id       : 1,
                title         : "Soirée Tacos",
                date          : new Date(),
                place         : "Chez Maxime",
                description   : "On va manger tacos",
                capacity      : 10,
                others        : "Apportez des tacos",
                image_location: "",
            },
        ],
        projects: [
            {
                id            : 1,
                club_id       : 1,
                title         : "Projet de ouf",
                date          : new Date(),
                description   : "On va faire un projet de ouf",
                image_location: "",
            },
        ],
    },
    {
        id            : 2,
        name          : "BDE",
        short_name    : "bde",
        image_location: "/images/fillingPic.gif",
        description   : "Le BDE c'est moins bien que le CIA mais c'est bien aussi !",
        board_members : "",
        events        : [],
        projects      : [],
    },
];

export async function getAllClubs(): Promise<Club[]> {
    await fetch("https://jsonplaceholder.typicode.com");
    
    return CLUBS.map(mapClub);
}

export async function getClubByShortName(short_name: string): Promise<Club | undefined> {
    await fetch("https://jsonplaceholder.typicode.com");
    
    const raw_club = CLUBS.find((c) => { return c.short_name === short_name; });

    return raw_club ? mapClub(raw_club) : undefined;
}
