import { FC, ReactNode, ChangeEvent, ChangeEventHandler } from "react";
import FormBtnComp from "@/ui/components/forms/form_btn.component";
import MultiLineTextFieldComp from "@/ui/components/forms/fields/multi_line.component";
import VerticalSeparatorComp from "@/ui/components/forms/vertical_separator.component";

import { faPencil, faPlay } from "@fortawesome/free-solid-svg-icons";

import "@/ui/components/admin/event_page_edit.component.css";

interface EventPageFormCompProps {
    id?          : string;
    name?        : string;
    value?       : string;
    onValueChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const EventPageFormComp: FC<EventPageFormCompProps> = (props: EventPageFormCompProps): ReactNode => {
    return (
        <div className="event-page-form-comp">
            <div className="event-form">
                <div className="col3">
                    <div className="row">
                        <MultiLineTextFieldComp
                            id={props.id + "_content"}
                            text="Event Page Content"
                            icon={faPencil}
                            name={props.name + "_content"}
                            value={props.value?? ""}
                            onValueChange={props.onValueChange}
                        />

                        <FormBtnComp text="Save the new modification" icon={faPencil} />
                    </div>

                    <VerticalSeparatorComp />
                    
                    <div className="row">
                        <MultiLineTextFieldComp
                            id={props.id + "_preview"}
                            text="Event Page Preview"
                            icon={faPlay}
                            name={props.name + "_preview"}
                            value={props.value?? ""}
                            onValueChange={(event: ChangeEvent<HTMLTextAreaElement>): void => {
                                console.log("Function not implemented." + event.target.value);
                            }}
                        />

                        {/* <Marckdown>

                        </Marckdown> */}
                        <FormBtnComp text="Open the event page" icon={faPlay} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventPageFormComp;
