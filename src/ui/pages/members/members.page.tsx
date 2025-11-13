import { FC, ReactNode, useEffect } from "react";
import MembersSectionComp from "@/ui/components/members/section.component";
import MembersListComp from "@/ui/components/members/list.component";

const MemberPage: FC = (): ReactNode => {
    useEffect(() => {
        console.log("Loaded: MembersPage");
    }, []);

    useEffect(() => {
        console.log("Rendered: MembersPage");
    });

    return (
        <>
            <MembersSectionComp />
            <hr />
            <MembersListComp />
        </>
    );
};

export default MemberPage;
