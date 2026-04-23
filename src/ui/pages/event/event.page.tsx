import EventsSectionComp from "@/ui/components/event/eventssection.component";
import EventsListComp from "@/ui/components/event/eventslist.component";
import { FC, ReactNode, useEffect } from "react";

const ClubPage: FC = (): ReactNode => {
    useEffect(() => {
        console.log("Loaded: ClubPage");
    }, []);

    useEffect(() => {
        console.log("Rendered: ClubPage");
    });

    return (
        <>
            <EventsSectionComp />
            <hr />
            <EventsListComp />
        </>
    );
};

export default ClubPage;
