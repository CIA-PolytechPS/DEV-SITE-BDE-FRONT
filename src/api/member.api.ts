import { Member, mapMember } from "@/shared/models/member.model";

const MEMBERS: Member[] = [
    {
        user_id: 1,
        club_id: 1,
        job_id : 1,
    },
    {
        user_id: 2,
        club_id: 2,
        job_id : 2,
    },
    {
        user_id: 3,
        club_id: 3,
        job_id : 3,
    },
];

export async function getMembers(): Promise<Member[]> {
    await fetch("http://localhost:3000/logo192.png");

    return MEMBERS.map(mapMember);
}

export async function getMembersByJob(job_id: number): Promise<Member[]> {
    await fetch("http://localhost:3000/logo192.png");
    
    return MEMBERS.filter((member) => { return member.job_id === job_id; }).map(mapMember);
}
