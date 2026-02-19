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
                <h2>{props.event.nom}</h2>
                <p>Organisé par: {props.event.organisateur}</p>
                <p>Lieu: {props.event.lieu}</p>

                <p>
                    Catégories :
                    {props.event.event_categories_id.map((event_category_id) => {
                        return event_categories.current.find((cat) => { return cat.id === event_category_id; })?.name ?? "";
                    })}
                </p>

                <p>Participants: {props.event.participants}</p>
                <p>Date de début: {props.event.datedebut.toLocaleDateString()}</p>
                <p>Date de fin: {props.event.datefin.toLocaleDateString()}</p>
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
                    <li key={event.id} style={{ margin: "40px" }}>
                        <Link to={`/event/${event.id.toString()}`}>
                            <EventCardComp event={event}>
                                <code lang="python">print(Hello world)</code>
                            </EventCardComp>
                        </Link>

                        <hr />
                    </li>
                );
            })}
        </ul>
    );
};

export default EventsPage;
