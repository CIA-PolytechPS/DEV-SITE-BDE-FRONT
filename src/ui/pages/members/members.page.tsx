import { FC, ReactNode, useEffect } from "react";
import "@/ui/pages/members/members.page.css";

import MembersSectionComp from "../../components/clubs/memberssection.component";

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
        </>
    );
};

export default HomePage;
