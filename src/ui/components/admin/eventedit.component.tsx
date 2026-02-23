import { FC, ReactNode, useEffect, useState, ChangeEvent, MouseEvent } from "react";

// Custom Components //
import TextFieldComp from "@/ui/components/forms/textfield.component";
import DateFieldComp from "@/ui/components/forms/datefield.component";
import TimeFieldComp from "@/ui/components/forms/timefield.component";
import NumberFieldComp from "@/ui/components/forms/numberfield.component";
import MultiLineTextFieldComp from "@/ui/components/forms/multilinefield.component";
import FormBtnComp from "@/ui/components/forms/formbtn.component";
import HorizontalSeparatorComp from "@/ui/components/forms/horizontalseparator.component";
import VerticalSeparatorComp from "@/ui/components/forms/verticalseparator.component";
import Timeline from "@/ui/components/forms/timeline.component";
import BoxDownFieldComp from "@/ui/components/forms/boxdownfield.component";

// Material UI //
import { CircularProgress } from "@mui/material";

// Icons //
import { faClone, faTrash, faLocationDot, faUsers, faImage, faCircleXmark, faCircleCheck, faFilePen } from "@fortawesome/free-solid-svg-icons";

// API //
import { getListEvents } from "@/api/event.api";
import { useGeneralVars } from "@/shared/contexts/common/general.context";
import { Event, EventCategory } from "@/shared/models/event.model";

// CSS //
import "@/ui/components/admin/eventedit.component.css";

const EventFormComp: FC = (): ReactNode => {
    const [events, setEvents] = useState<Event[] | undefined>(undefined);
    const [current_event, setCurrentEvent] = useState<Event | undefined>(undefined);
    const { event_categories } = useGeneralVars();
    
    useEffect(() => {
        console.log("Loaded: Event Form Component");

        getListEvents()
            .then(setEvents)
            .catch((error: unknown) => { alert("Can't retrieve Events list :" + String(error)); });
    }, []);

    useEffect(() => {
        console.log("Rendered: Event Form Component");
    });

    useEffect(() => {
        console.log("New Current Event");
    }, [current_event]);
    
    if (events === undefined) {
        return (
            <div className="centered">
                <CircularProgress size={150} />
            </div>
        );
    }

    const newEventSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        const selected_event = events.find((e) => { return e.name === event.target.value; });
        console.log(selected_event);
        setCurrentEvent(selected_event);
    };

    const timelineNewEventSelect = (event: MouseEvent, value: string) => {
        const selected_event = events.find((e) => { return e.name === value; });
        console.log(event);
        setCurrentEvent(selected_event);
    };

    return (
        <div className="event-modification-comp">
            <Timeline
                values={events.map((event) => { return event.name; })}
                valueChangeEvent={timelineNewEventSelect}
                default_value={current_event?.name ?? ""}
            />

            <VerticalSeparatorComp />

            <div className="event-form">
                <BoxDownFieldComp
                    text="Selected Event"
                    values={events.map((event) => { return event.name; })}
                    valueChangeEvent={newEventSelect}
                    default_value={current_event?.name ?? ""}
                />

                <div className="col3">
                    <FormBtnComp text="New Event" />
                    <FormBtnComp text="Duplicate" icon={faClone} />
                    <FormBtnComp text="Delete" icon={faTrash} />
                </div>

                <HorizontalSeparatorComp />

                <TextFieldComp
                    key={current_event?.id.toString() ?? "new-title"}
                    text="Event Title"
                    default_value={current_event?.name ?? ""}
                />
                
                <div className="col2">
                    <DateFieldComp
                        key={`start-${current_event?.id.toString() ?? "new"}`}
                        text="Start Date"
                        default_value={current_event?.startdate.toLocaleDateString() ?? ""}
                    />

                    <DateFieldComp
                        key={`end-${current_event?.id.toString() ?? "new"}`}
                        text="End Date"
                        default_value={current_event?.enddate.toLocaleDateString() ?? ""}
                    />
                </div>

                <div className="col2">
                    <TimeFieldComp text="Start Time" />
                    <TimeFieldComp text="End Time" />
                </div>

                <div className="col2">
                    <NumberFieldComp
                        key={`nbrpleople-${current_event?.id.toString() ?? "new"}`}
                        text="Capacity"
                        icon={faUsers}
                        default_value={current_event?.nbparticipants.toString() ?? "0"}
                    />

                    <TextFieldComp
                        key={`place-${current_event?.id.toString() ?? "new"}`}
                        text="Event Location"
                        icon={faLocationDot}
                        default_value={current_event?.place ?? ""}
                    />
                </div>

                <MultiLineTextFieldComp
                    key={`description-${current_event?.id.toString() ?? "new"}`}
                    text="Small Description"
                    icon={faFilePen}
                    default_value={current_event?.description ?? ""}
                />

                <BoxDownFieldComp
                    key={`cathegories-${current_event?.id.toString() ?? "new"}`}
                    text="Event Cathegories"
                    values={event_categories.current.map((ec: EventCategory) => { console.log("EC : " + ec); return ec.name; })}
                />

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
