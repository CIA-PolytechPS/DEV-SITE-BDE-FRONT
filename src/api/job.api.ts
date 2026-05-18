import { Job, mapJob } from "@/shared/models/job.model";

const JOBS: Job[] = [
    {
        id       : 1,
        name     : "Nom Prenom",
        group_id : 1,
        parent_id: 1,
        is_br    : true,
    },
    {
        id       : 2,
        name     : "Nom Prenom",
        group_id : 2,
        parent_id: 1,
        is_br    : false,
    },
    {
        id       : 3,
        name     : "Nom Prenom",
        group_id : 1,
        parent_id: 4,
        is_br    : true,
    },
];

export async function getAllJobs(): Promise<Job[]> {
    await fetch("http://localhost:3000/logo192.png");

    return JOBS.map(mapJob);
}

export async function getAllBrJobs(): Promise<Job[]> {
    await fetch("http://localhost:3000/logo192.png");

    return JOBS.filter((job) => { return job.is_br; }).map(mapJob);
}

