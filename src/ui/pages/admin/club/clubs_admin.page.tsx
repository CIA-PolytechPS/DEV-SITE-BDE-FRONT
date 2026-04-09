import { FC, ReactNode, useEffect, useState } from "react";
import EventEditForm from "@/ui/components/admin/event_edit.component";
import ClubSectionEdit from "@/ui/components/admin/club_section_edit.component";
import HorizontalSeparatorComp from "@/ui/components/forms/horizontal_separator.component";
import FormBtnComp from "@/ui/components/forms/form_btn.component";
import BoxDownFieldComp from "@/ui/components/forms/fields/boxdown.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

import "@/ui/pages/admin/admin.page.css";
import "@/ui/components/admin/event_edit.component.css";

import { faClone, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { getListEvents } from "@/api/event.api";
import { Event } from "@/shared/models/event.model";


const ClubsAdminPage: FC = (): ReactNode => {
    const [events, setEvents] = useState<Event[] | undefined>(undefined);
    
    useEffect(() => {
        getListEvents()
            .then(setEvents)
            .catch((error: unknown) => { alert("Can't retrieve Events list :" + String(error)); });
    }, []);

    return (
        <div>
            <h2>Clubs Modification Page (Admin Page)</h2>

            <p>
                Nemo quaeso miretur, si post exsudatos labores itinerum longos congestosque adfatim commeatus
                fiducia vestri ductante barbaricos pagos adventans velut mutato repente consilio ad placidiora deverti.
                <br />
                <br />
                Mox dicta finierat, multitudo omnis ad, quae imperator voluit, promptior laudato consilio
                consensit in pacem ea ratione maxime percita, quod norat expeditionibus crebris fortunam
                eius in malis tantum civilibus vigilasse, cum autem bella moverentur externa, accidisse
                plerumque luctuosa, icto post haec foedere gentium ritu perfectaque sollemnitate imperator
                Mediolanum ad hiberna discessit.
            </p>

            <HorizontalSeparatorComp />

            <div className="event-form" style={{ width: "100%" }}>
                <BoxDownFieldComp text="Club Select" values={["BDE", "CIA", "PolyChrome"]} icon={faPen} />
                
                <div className="col3">
                    <FormBtnComp text="New Event" />
                    <FormBtnComp text="Duplicate" icon={faClone} />
                    <FormBtnComp text="Delete" icon={faTrash} />
                </div>
            </div>
            
            <HorizontalSeparatorComp />

            <EventEditForm
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
            <ClubSectionEdit />

            <h3>
                <FontAwesomeIcon icon={faHashtag} /> Section Preview
            </h3>
        </div>
    );
};

export default ClubsAdminPage;
