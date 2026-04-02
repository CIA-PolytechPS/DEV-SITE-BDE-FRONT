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

            {
                events.length === 0
                    ? <CircularProgress />
                    : (
                        <div className="timeline">
                            {
                                events.map((event) => {
                                    return (
                                        <div className="container right">
                                            <EventCard event={event} />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    )
            }
        </div>
    );
};

export default TimelineComp;
