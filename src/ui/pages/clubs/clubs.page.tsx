import { FC, ReactNode, useEffect } from "react";
import ClubsSectionComp from "./clubs.section";
import "@/ui/pages/clubs/clubs.page.css";

const ClubPage: FC = (): ReactNode => {
    useEffect(() => {
        console.log("Loaded: ClubPage");
    }, []);

    useEffect(() => {
        console.log("Rendered: ClubPage");
    });

    return (
        <>
            <ClubsSectionComp />
            <div className="separator"></div>
        </>
    );
};

export default ClubPage;
