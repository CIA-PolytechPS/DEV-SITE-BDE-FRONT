import { ChangeEvent, FC, ReactNode } from "react";
import TextFieldComp from "@/ui/components/forms/fields/text.component";
import MultiLineTextFieldComp from "@/ui/components/forms/fields/multi_line.component";
import FormBtnComp from "@/ui/components/forms/form_btn.component";
import HorizontalSeparatorComp from "@/ui/components/forms/horizontal_separator.component";
import VerticalSeparatorComp from "@/ui/components/forms/vertical_separator.component";
import BoxDownFieldComp from "@/ui/components/forms/fields/boxdown.component";
import Timeline from "@/ui/components/forms/timeline.component";
import { faClone, faTrash, faImage, faCircleXmark, faCircleCheck, faFilePen } from "@fortawesome/free-solid-svg-icons";

import "@/ui/components/admin/event_edit.component.css";

const ClubSectionFormComp: FC = (): ReactNode => {
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

                <TextFieldComp
                    text="Section/Project Title"
                    onValueChange={(event: ChangeEvent<HTMLInputElement>): void => {
                        console.log("Function not implemented." + event.target.value);
                    }}
                />

                <MultiLineTextFieldComp
                    id=""
                    text="Content"
                    icon={faFilePen}
                    name=""
                    value=""
                    onValueChange={(event: ChangeEvent<HTMLTextAreaElement>): void => {
                        console.log("Function not implemented." + event.target.value);
                    }}
                />

                <TextFieldComp
                    text="Image"
                    icon={faImage}
                    onValueChange={(event: ChangeEvent<HTMLInputElement>): void => {
                        console.log("Function not implemented." + event.target.value);
                    }}
                />
                
                <div className="col2">
                    <FormBtnComp text="Cancel" icon={faCircleXmark} />
                    <FormBtnComp text="Submit" icon={faCircleCheck} />
                </div>
            </div>
        </div>
    );
};

export default ClubSectionFormComp;
