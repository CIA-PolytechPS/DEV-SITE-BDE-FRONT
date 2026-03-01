import { Project } from "@/shared/models/project.model";

const PROJECTS: Project[] = [
    { id: 1, club_id: 1, title: "Project 1", description: "lorem ipsum lorem ipsum", image: "https://data.bde-pps.fr/bde/images/logo/bde.svg" },
    { id: 2, club_id: 1, title: "Project 2", description: "Description of project 2", image: "https://data.bde-pps.fr/bde/images/logo/bde.svg" },
    { id: 3, club_id: 1, title: "Project 3", description: "Description of project 3", image: "https://data.bde-pps.fr/bde/images/logo/bde.svg" },
];

export async function getAllProjects(): Promise<Project[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");
    
    return PROJECTS;
}
