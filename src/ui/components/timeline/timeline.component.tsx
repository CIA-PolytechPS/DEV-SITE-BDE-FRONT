import { FC, ReactNode, useEffect, useState } from "react";
import { getEvents } from "@/api/event.api";
import { Event } from "@/shared/models/event.model";
import EventCard from "@/ui/components/timeline/eventCard.component";
import { CircularProgress } from "@mui/material";

const TimelineComp: FC = (): ReactNode => {
    const [events, setevents] = useState<Event[]>([]);

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
        <>
            <div className="w-7/8 m-[2%]">
                <div className="w-full">
                    <h1 className="underline underline-offset-3 text-5xl font-semibold">Les Membres du Bureau</h1>
                </div>

                {events.length === 0
                    ? <CircularProgress />
                    : (
                        <ul className="mt-[3%] columns-1">
                            {events.map((event) => {
                                return <EventCard event={event} />;
                            })}
                        </ul>
                    )}
            </div>
        </>
    );
};

export default TimelineComp;
