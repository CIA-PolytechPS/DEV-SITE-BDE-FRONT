import { FC, ReactNode, useEffect, useState } from "react";
import EventForm from "@/ui/components/admin/eventedit.component";
import EventPageForm from "@/ui/components/admin/eventpageedit.component";
import HorizontalSeparatorComp from "@/ui/components/forms/horizontalseparator.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

import { getListEvents } from "@/api/event.api";
import { Event } from "@/shared/models/event.model";

import "@/ui/pages/admin/admin.page.css";

const EventsAdminPage: FC = (): ReactNode => {
    const [events, setEvents] = useState<Event[] | undefined>(undefined);

    useEffect(() => {
        console.log("Loaded: Admin Page");

        getListEvents()
            .then(setEvents)
            .catch((error: unknown) => { alert("Can't retrieve Events list :" + String(error)); });
    }, []);

    useEffect(() => {
        console.log("Rendered: Admin Page");
    });

    return (
        <div className="event-modification-page">
            
            <h2>Events Modication Page (Admin Page)</h2>

            <text>
                <p>Select an event either from the list on the left or from the “Selected Event” section. </p>

                <p>
                    Nemo quaeso miretur, si post exsudatos labores itinerum longos congestosque adfatim commeatus
                    fiducia vestri ductante barbaricos pagos adventans velut mutato repente consilio ad placidiora deverti.
                </p>

                <p>
                    Mox dicta finierat, multitudo omnis ad, quae imperator voluit, promptior laudato consilio
                    consensit in pacem ea ratione maxime percita, quod norat expeditionibus crebris fortunam
                    eius in malis tantum civilibus vigilasse, cum autem bella moverentur externa, accidisse
                    plerumque luctuosa, icto post haec foedere gentium ritu perfectaque sollemnitate imperator
                    Mediolanum ad hiberna discessit.
                </p>
            </text>

            <HorizontalSeparatorComp />

            <EventForm
                events={events ?? []}
                onSave={async (updated_event) => {
                    console.log("Saving event:", updated_event);
                    await Promise.resolve();
                }}
            />

            <h3>
                <FontAwesomeIcon icon={faHashtag} /> Event Preview
            </h3>

            <HorizontalSeparatorComp />
            <EventPageForm />
        </div>
    );
};

export default EventsAdminPage;
