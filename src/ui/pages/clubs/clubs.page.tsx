import { FC, ReactNode, useEffect } from "react";
import ClubsSectionComp from "./clubs.section";

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
        </>
    );
};

export default ClubPage;
