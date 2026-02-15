import { FC, ReactNode, useEffect } from "react";
import TextFieldComp from "@/ui/components/forms/textfield.component";
import DateFieldComp from "@/ui/components/forms/datefield.component";
import TimeFieldComp from "@/ui/components/forms/timefield.component";
import NumberFieldComp from "@/ui/components/forms/numberfield.component";
import MultiLineTextFieldComp from "@/ui/components/forms/multilinefield.component";
import FormBtnComp from "@/ui/components/forms/formbtn.component";
import HorizontalSeparatorComp from "@/ui/components/forms/horizontalseparator.component";
import VerticalSeparatorComp from "@/ui/components/forms/verticalseparator.component";
import Timeline from "@/ui/components/forms/timeline.component";
import { faClone, faTrash, faLocationDot, faUsers, faImage, faCircleXmark, faCircleCheck, faFilePen } from "@fortawesome/free-solid-svg-icons";

import "@/ui/components/admin/eventform.component.css";

const EventFormComp: FC = (): ReactNode => {
    useEffect(() => {
        console.log("Loaded: Event Form Component");
    }, []);

    useEffect(() => {
        console.log("Rendered: Event Form Component");
    });

    return (
        <div className="event-modification-comp">
            <Timeline />
            <VerticalSeparatorComp />

            <div className="event-form">
                <TextFieldComp text="Selected Event" />

                <div className="col3">
                    <FormBtnComp text="New Event" />
                    <FormBtnComp text="Duplicate" icon={faClone} />
                    <FormBtnComp text="Delete" icon={faTrash} />
                </div>

                <HorizontalSeparatorComp />
                <TextFieldComp text="Event Title" />
                
                <div className="col2">
                    <DateFieldComp text="Start Date" />
                    <DateFieldComp text="End Date" />
                </div>

                <div className="col2">
                    <TimeFieldComp text="Start Time" />
                    <TimeFieldComp text="End Time" />
                </div>

                <div className="col2">
                    <NumberFieldComp text="Capacity" icon={faUsers} />
                    <TextFieldComp text="Event Location" icon={faLocationDot} />
                </div>

                <MultiLineTextFieldComp text="Small Description" icon={faFilePen} />
                <TextFieldComp text="Image" icon={faImage} />
                
                <div className="col2">
                    <FormBtnComp text="Cancel" icon={faCircleXmark} />
                    <FormBtnComp text="Submit" icon={faCircleCheck} />
                </div>
            </div>
        </div>
    );
};

export default EventFormComp;
