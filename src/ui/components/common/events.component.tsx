import { FC, ReactNode, useEffect, useState } from "react";
import { getEvents } from "@/api/events.api";
import { Events } from "@/shared/models/events.model";

// import { CircularProgress } from "@mui/material";

const EventsListComp: FC = (): ReactNode => {
    const [events, setevents] = useState<Events[]>([]);

    useEffect(() => {
        getEvents()
            .then(setevents)
            .catch((error: unknown) => { alert("Can't retrieve Events list :" + String(error)); });

        console.log("Loaded: Events");
    }, []);

    useEffect(() => {
        console.log("Rendered: Events");
    });

    return (
        <div>
            <h2>Evenements à venir</h2>
        </div>
    );
};

export default EventsListComp;
