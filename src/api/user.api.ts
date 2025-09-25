import { User, mapUser } from "@/shared/models/user.model";

const USERS: User[] = [
    { id: 1, pseudo: "", email: "", firstname: "", lastname: "", created_on: new Date(), last_connection: new Date() },
    { id: 2, pseudo: "", email: "", firstname: "", lastname: "", created_on: new Date(), last_connection: new Date() },
    { id: 3, pseudo: "", email: "", firstname: "", lastname: "", created_on: new Date(), last_connection: new Date() },
];

export async function getSelf(_token: string): Promise<User> {
    return mapUser(USERS[0]);
}
