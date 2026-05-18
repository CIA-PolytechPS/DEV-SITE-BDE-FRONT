import { FC, ReactNode, useEffect, useState } from "react";

import { getMembersByJob } from "@/api/member.api";
import { Member } from "@/shared/models/member.model";
import { getAllBrJobs } from "@/api/job.api";
import { Job } from "@/shared/models/job.model";
import { User } from "@/shared/models/user.model";
import { getUserById } from "@/api/user.api";

import MemberCard from "@/ui/components/members/card.component";
import { CircularProgress } from "@mui/material";
import { unknownToString } from "@/shared/utils/common/convert.util";


export interface MemberCardInfo {
    user_id : number;
    club_id : number;
    job_id  : number;
    photo   : string;
    nom     : string;
    fonction: string;
    email   : string;
}

async function getMemberCardInfo(): Promise<MemberCardInfo[]> {
    await fetch("http://localhost:3000/logo192.png");
    
    const jobs = await getAllBrJobs();

    if (jobs.length === 0) return [];

    const members: Member[] = [];
    
    for (const job of jobs) {
        members.push(...await getMembersByJob(job.id));
    }

    const membercardinfos: MemberCardInfo[] = [];

    let temp: User | undefined = undefined;
    let temp2: Job[] | undefined = undefined;
    let card: MemberCardInfo | undefined = undefined;

    for (const member of members) {
        temp = await getUserById("", member.user_id);

        if (temp === undefined) continue;

        temp2 = jobs.filter((job: Job) => { return job.id === member.job_id; });

        if (temp2.length === 0 || temp2[0] === undefined) continue;

        card = {
            user_id : member.user_id,
            club_id : member.club_id,
            job_id  : member.job_id,
            photo   : "http://localhost:3000/logo192.png",
            nom     : temp.firstname + " " + temp.lastname,
            fonction: temp2[0].name,
            email   : temp.email,
        };

        membercardinfos.push(card);
    }

    return membercardinfos;
}

const MembersListComp: FC = (): ReactNode => {
    const [members, setmembers] = useState<MemberCardInfo[]>([]);

    useEffect(() => {
        getMemberCardInfo()
            .then(setmembers)
            .catch((error: unknown) => { alert("Can't retrieve Members list :" + unknownToString(error)); });
    }, []);

    return (
        <div className="w-7/8 m-[2%]">
            <div className="w-full">
                <h1 className="underline underline-offset-3 text-5xl font-semibold">Les Membres du Bureau</h1>
            </div>

            {
                members.length === 0
                    ? <CircularProgress />
                    : (
                        <ul className="mt-[3%] columns-1 lg:columns-2">
                            {
                                members.map((member) => {
                                    return (
                                        <li>
                                            <MemberCard member={member} />
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    )
            }
        </div>
    );
};

export default MembersListComp;
