import { Project, mapProject } from "@/shared/models/project.model";

const PROJECTS: Project[] = [
    {
        id         : 1,
        club_id    : 1,
        title      : "Titre de la fonction",
        date       : new Date(),
        description: "Description de la fonction",
        image      : "chemin/vers/l/image",
        start_date : new Date(),
        end_date   : new Date(),
        ongoing    : true,
    },
    {
        id         : 2,
        club_id    : 3,
        title      : "Titre de la fonction",
        date       : new Date(),
        description: "Description de la fonction",
        image      : "chemin/vers/l/image",
        start_date : new Date(),
        end_date   : new Date(),
        ongoing    : false,
    },
    {
        id         : 3,
        club_id    : 1,
        title      : "Titre de la fonction",
        date       : new Date(),
        description: "Description de la fonction",
        image      : "chemin/vers/l/image",
        start_date : new Date(),
        end_date   : new Date(),
        ongoing    : true,
    },
    {
        id         : 4,
        club_id    : 2,
        title      : "Titre de la fonction",
        date       : new Date(),
        description: "Description de la fonction",
        image      : "chemin/vers/l/image",
        start_date : new Date(),
        end_date   : new Date(),
        ongoing    : false,
    },
];

export async function getAllProjects(): Promise<Project[]> {
    await fetch("http://localhost:3000/logo192.png");

    return PROJECTS.map(mapProject);
}
