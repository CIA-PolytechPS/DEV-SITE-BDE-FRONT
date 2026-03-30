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

export async function getGroups(): Promise<Group[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");

    return GROUPS.map(mapGroup);
}
