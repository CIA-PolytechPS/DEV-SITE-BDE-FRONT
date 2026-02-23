import { FC, ReactNode, useEffect } from "react";
import TextFieldComp from "@/ui/components/forms/textfield.component";
import MultiLineTextFieldComp from "@/ui/components/forms/multilinefield.component";
import FormBtnComp from "@/ui/components/forms/formbtn.component";
import HorizontalSeparatorComp from "@/ui/components/forms/horizontalseparator.component";
import VerticalSeparatorComp from "@/ui/components/forms/verticalseparator.component";
import BoxDownFieldComp from "@/ui/components/forms/boxdownfield.component";
import Timeline from "@/ui/components/forms/timeline.component";
import { faClone, faTrash, faImage, faCircleXmark, faCircleCheck, faFilePen } from "@fortawesome/free-solid-svg-icons";

import "@/ui/components/admin/eventedit.component.css";

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
                <BoxDownFieldComp text="Selected Section/Project" values={[]} default_value="CIA" />

                <div className="col3">
                    <FormBtnComp text="New Section" />
                    <FormBtnComp text="Duplicate" icon={faClone} />
                    <FormBtnComp text="Delete" icon={faTrash} />
                </div>

                <HorizontalSeparatorComp />
                <TextFieldComp text="Section/Project Title" />
                <MultiLineTextFieldComp text="Content" icon={faFilePen} />
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
