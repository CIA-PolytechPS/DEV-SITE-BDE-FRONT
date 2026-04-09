import { FC, ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Event } from "@/shared/models/event.model";
import { CircularProgress } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { getListEvents } from "@/api/event.api";
import { useGeneralVars } from "@/shared/contexts/common/general.context";

interface EventCardProps {
    event    : Event;
    children?: ReactNode;
}

const EventCardComp: FC<EventCardProps> = (props: EventCardProps): ReactNode => {
    const { event_categories } = useGeneralVars();

    return (
        <>
            <div>
                <h2>{props.event.name}</h2>
                <p>Organisé par: {props.event.organisator}</p>
                <p>Lieu: {props.event.place}</p>

                <p>
                    Catégories :
                    {props.event.event_categories_id.map((event_category_id) => {
                        return event_categories.current.find((cat) => { return cat.id === event_category_id; })?.name ?? "";
                    }).join()}
                </p>


                <p>Participants: {props.event.nbparticipants}</p>
                <p>Date de début: {props.event.startdate.toLocaleDateString()}</p>
                <p>Date de fin: {props.event.enddate.toLocaleDateString()}</p>
                <ReactMarkdown>{props.event.description}</ReactMarkdown>
            </div>

            {props.children}
        </>
    );
};

const EventsPage: FC = (): ReactNode => {
    const [events, setEvents] = useState<Event[] | undefined>(undefined);

    useEffect(() => {
        console.log("Loaded: EventsPage");
    }, []);

    useEffect(() => {
        console.log("Rendered: EventsPage");
    });


    useEffect(() => {
        getListEvents()
            .then(setEvents)
            .catch((error: unknown) => { alert("Can't retrieve Events list :" + String(error)); });
    }, []);

    if (events === undefined) {
        return (
            <div className="centered">
                <CircularProgress size={150} />
            </div>
        );
    }

    return (
        <ul>
            {events.map((event) => {
                return (
                    <li key={event.id} className="m-5 border-2 border-solid border-gray-300 rounded-lg p-4 bg-gray text-black hover:bg-gray-200">
                        <Link to={`/event/${event.id.toString()}`}>
                            <EventCardComp event={event} />
                        </Link>

                        <hr />
                    </li>
                );
            })}
        </ul>
    );
};

export default EventsPage;
