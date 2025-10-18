import { FC, ReactNode, useEffect } from "react";
import ClubsSectionComp from "../../components/clubs/clubssection.component";
import ClubsListComp from "../../components/clubs/clubslist.component";
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
            <div className="separator" />
            <ClubsListComp />
        </>
    );
};

export default ClubPage;
