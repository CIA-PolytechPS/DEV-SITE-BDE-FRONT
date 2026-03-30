import { Member, mapMember } from "@/shared/models/member.model";

const MEMBERS: Member[] = [
    {
        user_id    : 1,
        club_id    : 1,
        fonction_id: 1,
    },
    {
        user_id    : 2,
        club_id    : 2,
        fonction_id: 2,
    },
    {
        user_id    : 3,
        club_id    : 3,
        fonction_id: 3,
    },
];

export async function getMembers(): Promise<Member[]> {
    await fetch("https://data.bde-pps.fr/bde/images/logo/bde.svg");

    return MEMBERS.map(mapMember);
}
