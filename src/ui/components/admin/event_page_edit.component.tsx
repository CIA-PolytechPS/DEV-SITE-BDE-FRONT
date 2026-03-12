import { FC, ReactNode, ChangeEvent, ChangeEventHandler } from "react";
import FormBtnComp from "@/ui/components/forms/form_btn.component";
import MultiLineTextFieldComp from "@/ui/components/forms/multi_line_field.component";
import VerticalSeparatorComp from "@/ui/components/forms/vertical_separator.component";

import { faPencil, faPlay } from "@fortawesome/free-solid-svg-icons";

import "@/ui/components/admin/event_page_edit.component.css";

interface EventPageFormCompProps {
    id?          : string;
    name?        : string;
    value?       : string;
    onValueChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const EventPageFormComp: FC<EventPageFormCompProps> = ({ name = "", id = "", value = "", onValueChange }): ReactNode => {
    return (
        <div className="event-page-form-comp">
            <div className="event-form">
                <div className="col3">
                    <div className="row">
                        <MultiLineTextFieldComp
                            id={id}
                            text="Event Page Content"
                            icon={faPencil}
                            name={name}
                            value={value}
                            onValueChange={onValueChange}
                        />

                        <FormBtnComp text="Save the new modification" icon={faPencil} />
                    </div>

                    <VerticalSeparatorComp />
                    
                    <div className="row">
                        <MultiLineTextFieldComp
                            id={id}
                            text="Event Page Preview"
                            icon={faPlay}
                            name={name}
                            value={value}
                            onValueChange={function(event: ChangeEvent<HTMLTextAreaElement>): void {
                                throw new Error("Function not implemented." + event.target.value);
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
