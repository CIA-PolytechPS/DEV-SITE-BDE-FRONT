import { FC, ReactNode, useEffect, useState, MouseEvent, ChangeEvent } from "react";
import { datetimeLocalStringToDate } from "@/shared/utils/common/date.utils";

// Custom Components //
import TextFieldComp from "@/ui/components/forms/fields/text.component";
import DatetimeFieldComp from "@/ui/components/forms/fields/datetime.component";
import NumberFieldComp from "@/ui/components/forms/fields/number.component";
import MultiLineTextFieldComp from "@/ui/components/forms/fields/multi_line.component";
import FormBtnComp from "@/ui/components/forms/form_btn.component";
import HorizontalSeparatorComp from "@/ui/components/forms/horizontal_separator.component";
import VerticalSeparatorComp from "@/ui/components/forms/vertical_separator.component";
import Timeline from "@/ui/components/forms/timeline.component";
import BoxDownFieldComp from "@/ui/components/forms/fields/boxdown.component";
import EventPageForm from "@/ui/components/admin/event_page_edit.component";

// Icons //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone, faTrash, faLocationDot, faUsers, faImage } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark, faCircleCheck, faFilePen, faHashtag } from "@fortawesome/free-solid-svg-icons";

// API //
import { Event, EventCategory } from "@/shared/models/event.model";

import { useGeneralVars } from "@/shared/contexts/common/general.context";

// CSS //
import "@/ui/components/admin/event_edit.component.css";

interface EventFormEditorProps {
    events: Event[];
    onSave: (updatedEvent: Event) => Promise<void>;
}

const EventFormComp: FC<EventFormEditorProps> = ( props ): ReactNode => {
    const [selected_event_id, setSelectedEventId] = useState<number>(-1);
    const [form_data, setFormData] = useState<Event | null>(null);
    const [is_loading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    // Datetime field need to be handled manually to avoid some issues with timezone and seconds that cause the input to be reset on each change
    const [start_field_date_value, setStartFieldDateValue] = useState("");
    const [end_field_date_value, setEndFieldDateValue] = useState("");

    const { event_categories } = useGeneralVars();

    useEffect(() => {
        if (selected_event_id != -1) {
            const selected = props.events.find((e) => { return e.id === selected_event_id; });

            if (selected) {
                // IMPORTANT: Create a copy to avoid modifying the original.
                setFormData({ ...selected });
                setError(null);

                // Manuly set the datetime-local input value to avoid issues of rerender not needed
                const start_datetime_value = new Date(selected.startdate).toISOString()
                    .slice(0, 16);
                setStartFieldDateValue(start_datetime_value);
                const end_datetime_value = new Date(selected.enddate).toISOString()
                    .slice(0, 16);
                setEndFieldDateValue(end_datetime_value);
            }
        }
        else {
            setFormData(null);
            setStartFieldDateValue("");
            setEndFieldDateValue("");
        }
    }, [selected_event_id, props.events]);


    // Utility function to update the state
    function setFormDataValue (name: string, value: string | number | Date) {
        if (form_data) {
            setFormData({
                ...form_data,
                [name]: value,
            });
        }
    };

    // Handler for text, number, etc. inputs.
    function handleInputChange (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormDataValue(name, value);
    };

    // Handler for the Datetime field only
    function handleDatetimeInputChange (e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        
        if (form_data?.[name as keyof Event]) {
            try {
                const new_value = datetimeLocalStringToDate(value);
                
                if (isNaN(new_value.getTime())) {
                    console.error("Invalid date:", value);

                    return;
                }
                
                setFormDataValue(name, new_value);
            }
            catch(error) {
                console.error("Error parsing datetime:", error);
            }
        }
    };

    function handleSelectChange (e: React.ChangeEvent<HTMLSelectElement>) {
        const value = e.target.value;
        setSelectedEventId(value === "" ? -1 : Number(value));
    };

    async function handleSave () {
        if (!form_data) {
            setError("Please select an event");

            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            await props.onSave(form_data);
            console.log("Event successfully saved");
        }
        catch(err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Error during the save",
            );
        }
        finally {
            setIsLoading(false);
        }
    };

    function timelineNewEventSelect (event: MouseEvent, value: string) {
        const selected_event = props.events.find((e) => { return e.name === value; });
        console.log(event);
        setSelectedEventId(selected_event?.id ?? -1);
    };

    
    function removeCategory (cat_id: number, form_data: any) {
        if (!form_data) return;
        setFormData({
            ...form_data,
            event_categories_id: form_data.event_categories_id.filter((id: number) => { return id !== cat_id; }),
        });
    };

    return (
        <div>
            <div className="event-modification-comp">
                <Timeline
                    values={props.events.map((event) => { return event.name; })}
                    valueChangeEvent={timelineNewEventSelect}
                    default_value={form_data?.name ?? ""}
                />

                <VerticalSeparatorComp />

                <div className="event-form">
                    <div className="form-field">
                        <label htmlFor="event-select">Sélectionner un événement:</label>

                        <select
                            id="event-select"
                            value={selected_event_id.toString()}
                            onChange={handleSelectChange}
                            className="event-select"
                        >
                            <option value="">-- Choisir un événement --</option>

                            {props.events.map((event) => {
                                return (
                                    <option key={event.id} value={event.id}>
                                        {event.name} ({event.startdate.toLocaleDateString()})
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className="col3">
                        <FormBtnComp text="New Event" />
                        <FormBtnComp text="Duplicate" icon={faClone} />
                        <FormBtnComp text="Delete" icon={faTrash} />
                    </div>

                    <HorizontalSeparatorComp />

                    <TextFieldComp
                        id="title"
                        text="Event Title"
                        name="name"
                        value={form_data?.name ?? ""}
                        placeholder="Event Title"
                        onValueChange={handleInputChange}
                    />

                    {form_data && (
                        <form>
                            <div className="col2">
                                <DatetimeFieldComp
                                    id="startdate"
                                    name="startdate"
                                    text="Start Date"
                                    value={start_field_date_value}
                                    onValueChange={(e) => { setStartFieldDateValue(e.target.value); handleDatetimeInputChange(e); }}
                                />

                                <DatetimeFieldComp
                                    id="enddate"
                                    name="enddate"
                                    text="End Date"
                                    value={end_field_date_value}
                                    onValueChange={(e) => { setEndFieldDateValue(e.target.value); handleDatetimeInputChange(e); }}
                                />
                            </div>

                            <p>
                                {"=>"} {form_data.startdate.toString()} {"<->"} {form_data.enddate.toString()}
                            </p>

                            <div className="col2">
                                <NumberFieldComp
                                    id="capacity"
                                    text="Capacity"
                                    name="nbparticipants"
                                    value={form_data.nbparticipants}
                                    icon={faUsers}
                                    onChange={handleInputChange}
                                />

                                <TextFieldComp
                                    text="Event Location"
                                    name="place"
                                    icon={faLocationDot}
                                    value={form_data.place}
                                    onValueChange={handleInputChange}
                                />
                            </div>

                            <MultiLineTextFieldComp
                                id="description"
                                name="description"
                                text="Small Description"
                                value={form_data.description}
                                placeholder="Small description of the event"
                                icon={faFilePen}
                                onValueChange={handleInputChange}
                            />

                            <BoxDownFieldComp
                                text="Event Cathegories"
                                values={event_categories.current.map((cat: EventCategory) => { return cat.name; })}
                                valueChangeEvent={(e: ChangeEvent<HTMLSelectElement>) => {
                                    const cat = event_categories.current.find((c) => { return c.name === e.target.value; });

                                    if (cat) {
                                        const already_selected = form_data.event_categories_id.includes(cat.id);

                                        if (!already_selected) {
                                            setFormData({
                                                ...form_data,
                                                ["event_categories_id"]: [...form_data.event_categories_id, cat.id],
                                            });
                                        }
                                    }
                                }}
                            />

                            <div>
                                {form_data.event_categories_id.map((cat_id) => {
                                    const cat = event_categories.current.find((c) => { return c.id === cat_id; });

                                    return (
                                        <span key={cat_id} className="event-category-tag">
                                            {cat ? cat.name : "Unknown Category"}

                                            <button
                                                className="event-category-delete-btn"
                                                type="button"
                                                onClick={() => { removeCategory(cat_id, form_data); }}
                                            >
                                                <FontAwesomeIcon icon={faCircleXmark} />
                                            </button>
                                        </span>
                                    );
                                })}
                            </div>

                            <TextFieldComp
                                id="image"
                                text="Image"
                                name="photo"
                                icon={faImage}
                                value={form_data.photo}
                                onValueChange={handleInputChange}
                                placeholder="Image Path"
                            />

                            {error && <div className="error-message">{error}</div>}
                            
                            <div className="col2">
                                <FormBtnComp text="Cancel" icon={faCircleXmark} />

                                <FormBtnComp
                                    text={is_loading ? "Saving in progress..." : "Submit"}
                                    icon={faCircleCheck}
                                    btnOnClick={() => { return void handleSave(); }}
                                    btn_disabled={is_loading}
                                />
                            </div>
                        </form>
                    )}
                </div>
            </div>

            {form_data && (
                <>
                    <h3>
                        <FontAwesomeIcon icon={faHashtag} /> Event Preview
                    </h3>
                
                    <HorizontalSeparatorComp />

                    <EventPageForm
                        id="description"
                        name="description"
                        value={form_data.description}
                        onValueChange={handleInputChange}
                    />
                </>
            )}
        </div>
    );
};

export default EventFormComp;
