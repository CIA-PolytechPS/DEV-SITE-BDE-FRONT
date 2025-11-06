import { FC, ReactNode, useEffect } from "react";
import "@/ui/pages/members/members.page.css";

import MembersSectionComp from "../../components/members/memberssection.component";
import MembersListComp from "../../components/members/memberslist.component";

const HomePage: FC = (): ReactNode => {
    useEffect(() => {
        console.log("Loaded: MembersPage");
    }, []);

    useEffect(() => {
        console.log("Rendered: MembersPage");
    });

    return (
        <>
            <MembersSectionComp />
            <div className="separator" />
            <MembersListComp />
        </>
    );
};

export default HomePage;
