import { Group, mapGroup } from "@/shared/models/group.model";

const GROUPS: Group[] = [
    {
        id   : 1,
        name : "Groupe 1",
        color: "blue",
    },
    {
        id   : 2,
        name : "Groupe 2",
        color: "green",
    },
    {
        id   : 3,
        name : "Groupe 3",
        color: "red",
    },
];

export async function getAllGroups(): Promise<Group[]> {
    await fetch("http://localhost:3000/logo192.png");

    return GROUPS.map(mapGroup);
}
