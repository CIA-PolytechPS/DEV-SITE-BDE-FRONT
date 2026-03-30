import { User, mapUser } from "@/shared/models/user.model";

const USERS: User[] = [
    {
        id             : 1,
        pseudo         : "Pseudo1",
        email          : "user1@example.com",
        firstname      : "Firstname1",
        lastname       : "Lastname1",
        created_on     : new Date(),
        last_connection: new Date(),
        promo          : 2024,
    },
    {
        id             : 2,
        pseudo         : "Pseudo2",
        email          : "user2@example.com",
        firstname      : "Firstname2",
        lastname       : "Lastname2",
        created_on     : new Date(),
        last_connection: new Date(),
        promo          : 2023,
    },
    {
        id             : 3,
        pseudo         : "Pseudo3",
        email          : "user3@example.com",
        firstname      : "Firstname3",
        lastname       : "Lastname3",
        created_on     : new Date(),
        last_connection: new Date(),
        promo          : 2022,
    },
];

export async function getSelf(_token: string): Promise<User> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");

    return mapUser(USERS[0]);
}
