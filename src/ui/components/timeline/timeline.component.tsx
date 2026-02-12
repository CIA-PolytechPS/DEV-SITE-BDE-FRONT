import { FC, ReactNode, useEffect, useState } from "react";
import { getEvents } from "@/api/event.api";
import { Event } from "@/shared/models/event.model";
import EventCard from "@/ui/components/timeline/eventCard.component";
import { CircularProgress } from "@mui/material";
import "@/ui/components/timeline/timeline.component.css";

const TimelineComp: FC = (): ReactNode => {
    const [events, setevents] = useState<Event[]>([]);

    useEffect(() => {
        getEvents()
            .then(setevents)
            .catch((error: unknown) => { alert("Can't retrieve Events list :" + String(error)); });

        console.log("Loaded: Events");
    }, []);

    return (
        <div className="w-7/8 m-[2%]">
            <div className="w-full">
                <h1 className="underline underline-offset-3 text-5xl font-semibold">Evenements à Venir</h1>
            </div>

            {events.length === 0
                ? <CircularProgress />
                : (
                    <div className="timeline">
                        {events.map((event) => {
                            return (
                                <div className="container right">
                                    <EventCard event={event} />
                                </div>
                            );
                        })}
                    </div>
                )}
        </div>
    );
};

export default TimelineComp;
