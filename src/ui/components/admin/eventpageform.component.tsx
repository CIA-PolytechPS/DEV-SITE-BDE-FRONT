import { FC, ReactNode, useEffect } from "react";
import FormBtnComp from "@/ui/components/forms/formbtn.component";
import MultiLineTextFieldComp from "@/ui/components/forms/multilinefield.component";
import VerticalSeparatorComp from "@/ui/components/forms/verticalseparator.component";
import { faPencil, faPlay } from "@fortawesome/free-solid-svg-icons";

import "@/ui/components/admin/eventpageform.component.css";

const EventFormComp: FC = (): ReactNode => {
    useEffect(() => {
        console.log("Loaded: Event Form Component");
    }, []);

    useEffect(() => {
        console.log("Rendered: Event Form Component");
    });

    return (
        <div className="event-page-form-comp">
            <div className="event-form">
                <div className="col3">
                    <div className="row">
                        <MultiLineTextFieldComp text="Event Page Content" icon={faPencil} />
                        <FormBtnComp text="Save the new modification" icon={faPencil} />
                    </div>

                    <VerticalSeparatorComp />
                    
                    <div className="row">
                        <MultiLineTextFieldComp text="Event Page Preview" icon={faPlay} />
                        <FormBtnComp text="Open the event page" icon={faPlay} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventFormComp;
