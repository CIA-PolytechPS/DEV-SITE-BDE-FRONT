import { FC, ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Event } from "@/shared/models/event.model";
import { getEvent } from "@/api/event.api";
import { CircularProgress } from "@mui/material";
import ReactMarkdown from "react-markdown";

const EventPage: FC = (): ReactNode => {
    useEffect(() => {
        console.log("Loaded: MembersPage");
    }, []);

    useEffect(() => {
        console.log("Rendered: MembersPage");
    });

    const param = useParams();
    const id = parseInt(param.id ?? "-1");

    const [event, setevent] = useState<Event | undefined | null>(undefined);

    useEffect(() => {
        getEvent(id)
            .then(setevent)
            .catch((error: unknown) => { alert("Can't retrieve Members list :" + String(error)); });
    }, []);

    if (event === undefined) return <CircularProgress />;

    if (event === null) return <p className="text-[50px]">{param.id} not found</p>;

    return (
        <>
            <section className="flex justify-center items-center py-12 px-8 w-7/8 m-[2%]">
                <div className="flex flex-col max-w-7xl justify-between items-center gap-10">
                    <img className="object-contain" src={event.photo} alt="Ceci est une image." />
                    <p className="text-zinc-500">Source : Hello World</p>
                </div>
            </section>

            <hr />

            <div className="pl-6 basis-2/3 flex flex-col items-start w-6/8 m-[2%]">

                <h1 className="font-semibold text-4xl mb-2 text-[#0061BB]">{event.name}</h1>
                <h3 className="font-semibold text-xl mb-2">Début : {event.startdate.toLocaleString("fr-FR")} </h3>
                <h3 className="font-semibold text-xl mb-2">Fin : {event.enddate.toLocaleString("fr-FR")} </h3>
                <h3 className="font-semibold text-xl mb-2">Organisé par : {event.organisator}</h3>
                <h3 className="font-semibold text-xl mb-2">Location : {event.place}</h3>

                <div className="pt-4 w-9/10 item-center">
                    <ReactMarkdown children={event.description} />
                </div>

            </div>
        </>
    );
};

export default EventPage;
