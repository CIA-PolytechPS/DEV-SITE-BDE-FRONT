import { FC, ReactNode, useEffect, useState } from "react";
import { getMembers } from "@/api/member.api";
import { Member } from "@/shared/models/member.model";
import MemberCard from "./card.component";
import { CircularProgress } from "@mui/material";

const MembersListComp: FC = (): ReactNode => {
    const [members, setmembers] = useState<Member[]>([]);

    useEffect(() => {
        getMembers()
            .then(setmembers)
            .catch((error: unknown) => { alert("Can't retrieve Members list :" + String(error)); });
    }, []);

    return (
        <>
            <div className="w-4/5 m-[2%]">
                <div className="w-full">
                    <h1 className="underline text-5xl font-semibold">Les Membres du Bureau</h1>
                </div>

                {members.length === 0
                    ? <CircularProgress />
                    : (
                        <div className="mt-[3%]">
                            {members.map((member) => {
                                return <MemberCard member={member} />;
                            })}
                        </div>
                    )}
            </div>
        </>
    );
};

export default MembersListComp;
