import { FC, ReactNode, useEffect, useState } from "react";
import EventForm from "@/ui/components/admin/event_edit.component";
import HorizontalSeparatorComp from "@/ui/components/forms/horizontal_separator.component";

import { getListEvents } from "@/api/event.api";
import { Event } from "@/shared/models/event.model";

import "@/ui/pages/admin/admin.page.css";

const EventsAdminPage: FC = (): ReactNode => {
    const [events, setEvents] = useState<Event[] | undefined>(undefined);

    useEffect(() => {
        getListEvents()
            .then(setEvents)
            .catch((error: unknown) => { alert("Can't retrieve Events list :" + String(error)); });
    }, []);

    return (
        <div>
            <h2>Events Modification Page (Admin Page)</h2>

            <p>
                Select an event either from the list on the left or from the “Selected Event” section.
                <br />
                <br />
                Nemo quaeso miretur, si post exsudatos labores itinerum longos congestosque adfatim commeatus
                fiducia vestri ductante barbaricos pagos adventans velut mutato repente consilio ad placidiora deverti.
                <br />
                <br />
                Mox dicta finierat, multitudo omnis ad, quae imperator voluit, promptior laudato consilio
                consensit in pacem ea ratione maxime percita, quod norat expeditionibus crebris fortunam
                eius in malis tantum civilibus vigilasse, cum autem bella moverentur externa, accidisse
                plerumque luctuosa, icto post haec foedere gentium ritu perfectaque sollemnitate imperator
                Mediolanum ad hiberna discessit.
                <br />
            </p>

            <HorizontalSeparatorComp />

            <EventForm
                events={events ?? []}
                onSave={async (updated_event) => {
                    console.log("Saving event:", updated_event);
                    await Promise.resolve();
                }}
            />
        </div>
    );
};

export default EventsAdminPage;
