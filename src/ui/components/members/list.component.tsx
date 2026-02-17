import { FC, ReactNode, useEffect, useState } from "react";
import { getMembers } from "@/api/member.api";
import { Member } from "@/shared/models/member.model";
import MemberCard from "@/ui/components/members/card.component";
import { CircularProgress } from "@mui/material";
import { unknownToString } from "@/shared/utils/common/convert.util";

const MembersListComp: FC = (): ReactNode => {
    const [members, setmembers] = useState<Member[]>([]);

    useEffect(() => {
        getMembers()
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
