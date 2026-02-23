import { FC, ReactNode, useEffect } from "react";
import EventEdit from "@/ui/components/admin/eventedit.component";
import ClubSectionEdit from "@/ui/components/admin/clubsectionedit.component";
import HorizontalSeparatorComp from "@/ui/components/forms/horizontalseparator.component";
import FormBtnComp from "@/ui/components/forms/formbtn.component";
import BoxDownFieldComp from "@/ui/components/forms/boxdownfield.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

import "@/ui/pages/admin/admin.page.css";
import "@/ui/components/admin/eventedit.component.css";

import { faClone, faTrash, faPen } from "@fortawesome/free-solid-svg-icons";


const EventsAdminPage: FC = (): ReactNode => {
    useEffect(() => {
        console.log("Loaded: Admin Page");
    }, []);

    useEffect(() => {
        console.log("Rendered: Admin Page");
    });

    return (
        <div className="clubs-modification-page">
            
            <h2>Clubs Modication Page (Admin Page)</h2>

            <text>
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

            <div className="event-form" style={{ width: "100%" }}>
                <BoxDownFieldComp text="Club Select" values={["BDE", "CIA", "PolyChrome"]} icon={faPen} />
                
                <div className="col3">
                    <FormBtnComp text="New Event" />
                    <FormBtnComp text="Duplicate" icon={faClone} />
                    <FormBtnComp text="Delete" icon={faTrash} />
                </div>
            </div>
            
            <HorizontalSeparatorComp />
            <EventEdit />

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

export default EventsAdminPage;
