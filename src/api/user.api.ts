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
    await fetch("http://localhost:3000/logo192.png");

    return mapUser(USERS[0]);
}

export async function getUserById(_token: string, user_id: number): Promise<User | undefined> {
    await fetch("http://localhost:3000/logo192.png");

    return USERS.filter((user) => { return user.id === user_id; }).map(mapUser)[0];
}
