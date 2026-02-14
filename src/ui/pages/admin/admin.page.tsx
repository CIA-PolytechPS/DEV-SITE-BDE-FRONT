import { FC, ReactNode, useEffect } from "react";
import TextFieldComp from "@/ui/components/forms/textfield.component";
import DateFieldComp from "@/ui/components/forms/datefield.component";
import TimeFieldComp from "@/ui/components/forms/timefield.component";
import NumberFieldComp from "@/ui/components/forms/numberfield.component";
import FormBtnComp from "@/ui/components/forms/formbtn.component";
import HorizontalSeparatorComp from "@/ui/components/forms/horizontalseparator.component";
import VerticalSeparatorComp from "@/ui/components/forms/verticalseparator.component";
import Timeline from "@/ui/components/forms/timeline.component";
import { faClone, faTrash, faLocationDot, faUsers, faImage, faCircleXmark, faCircleCheck, faHashtag } from "@fortawesome/free-solid-svg-icons";

import "@/ui/pages/admin/admin.page.css";

const AdminPage: FC = (): ReactNode => {
    useEffect(() => {
        console.log("Loaded: Admin Page");
    }, []);

    useEffect(() => {
        console.log("Rendered: Admin Page");
    });

    return (
        <div className="event-modification-comp">
            <Timeline />
            <VerticalSeparatorComp />

            <div className="event-form">
                <TextFieldComp text="Event Selectioned" />

                <div className="col3">
                    <FormBtnComp text="New Event" />
                    <FormBtnComp text="Duplicate" icon={faClone} />
                    <FormBtnComp text="Delete" icon={faTrash} />
                </div>

                <HorizontalSeparatorComp />
                <TextFieldComp text="Event Title" />
                
                <div className="col2">
                    <DateFieldComp text="Event Date" />
                    <TextFieldComp text="Event Location" icon={faLocationDot} />
                </div>

                <div className="col2">
                    <TimeFieldComp text="Start Time" />
                    <TimeFieldComp text="End Time" />
                </div>

                <TextFieldComp text="Small Description" />
                
                <div className="col2">
                    <NumberFieldComp text="Capacity" icon={faUsers} />
                    <TextFieldComp text="Autre" icon={faHashtag} />
                </div>

                <TextFieldComp text="Image" icon={faImage} />
                
                <div className="col2">
                    <FormBtnComp text="Cancel" icon={faCircleXmark} />
                    <FormBtnComp text="Submit" icon={faCircleCheck} />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
