import { Job, mapJob } from "@/shared/models/job.model";

const JOBS: Job[] = [
    {
        id       : 1,
        name     : "Nom Prenom",
        group_id : 1,
        parent_id: 1,
    },
    {
        id       : 2,
        name     : "Nom Prenom",
        group_id : 2,
        parent_id: 1,
    },
    {
        id       : 3,
        name     : "Nom Prenom",
        group_id : 1,
        parent_id: 4,
    },
];

export async function getAllJobs(): Promise<Job[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");

    return JOBS.map(mapJob);
}
