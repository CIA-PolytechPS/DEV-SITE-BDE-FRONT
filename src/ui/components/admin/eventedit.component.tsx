import { FC, ReactNode, useEffect, useState, MouseEvent, ChangeEvent } from "react";
import { datetimeLocalStringToDate } from "@/shared/utils/common/date.utils";

// Custom Components //
import TextFieldComp from "@/ui/components/forms/textfield.component";
import DatetimeFieldComp from "@/ui/components/forms/datetimefield.component";
import NumberFieldComp from "@/ui/components/forms/numberfield.component";
import MultiLineTextFieldComp from "@/ui/components/forms/multilinefield.component";
import FormBtnComp from "@/ui/components/forms/formbtn.component";
import HorizontalSeparatorComp from "@/ui/components/forms/horizontalseparator.component";
import VerticalSeparatorComp from "@/ui/components/forms/verticalseparator.component";
import Timeline from "@/ui/components/forms/timeline.component";
import BoxDownFieldComp from "@/ui/components/forms/boxdownfield.component";

// Icons //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone, faTrash, faLocationDot, faUsers, faImage, faCircleXmark, faCircleCheck, faFilePen } from "@fortawesome/free-solid-svg-icons";

// API //
import { Event, EventCategory } from "@/shared/models/event.model";

import { useGeneralVars } from "@/shared/contexts/common/general.context";

// CSS //
import "@/ui/components/admin/eventedit.component.css";

interface EventFormEditorProps {
    events: Event[];
    onSave: (updatedEvent: Event) => Promise<void>;
}

const EventFormComp: FC<EventFormEditorProps> = ({ events, onSave }): ReactNode => {
    const [selected_event_id, setSelectedEventId] = useState<number>(-1);
    const [form_data, setFormData] = useState<Event | null>(null);
    const [is_loading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { event_categories } = useGeneralVars();

    useEffect(() => {
        console.log("Rendered: Event Form Component");
    });

    useEffect(() => {
        if (selected_event_id || selected_event_id == 0) {
            const selected = events.find((e) => { return e.id === selected_event_id; });

            if (selected) {
            // IMPORTANT: Create a copy to avoid modifying the original.
                setFormData({ ...selected });
                setError(null);
            }
        }
        else {
            setFormData(null);
        }
    }, [selected_event_id, events]);

    // Utility function to update the state
    const setFormDataValue = (name: string, value: string | number | Date) => {
        console.warn("New Value : ", name, " = ", value);

        if (form_data) {
            setFormData({
                ...form_data,
                [name]: value,
            });
        }
    };

    // Handler for text, number, etc. inputs.
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormDataValue(name, value);
    };

    // Handler for the Datetime field only
    const handleDatetimeInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
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

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedEventId(Number(e.target.value));
    };

    const handleSave = async () => {
        if (!form_data) {
            setError("Please select an event");

            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            await onSave(form_data);
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

    const timelineNewEventSelect = (event: MouseEvent, value: string) => {
        const selected_event = events.find((e) => { return e.name === value; });
        console.log(event);
        setSelectedEventId(selected_event?.id ?? -1);
    };

    return (
        <div className="event-modification-comp">
            <Timeline
                values={events.map((event) => { return event.name; })}
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

                        {events.map((event) => {
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
                    default_value={form_data?.name ?? ""}
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
                                value={form_data.startdate}
                                onValueChange={handleDatetimeInputChange}
                            />

                            <DatetimeFieldComp
                                id="enddate"
                                name="enddate"
                                text="End Date"
                                value={form_data.enddate}
                                onValueChange={handleDatetimeInputChange}
                            />
                        </div>

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

                                const removeCategory = (cat_id: number) => {
                                    setFormData({
                                        ...form_data,
                                        event_categories_id: form_data.event_categories_id.filter((id) => { return id !== cat_id; }),
                                    });
                                };

                                return (
                                    <span key={cat_id} className="event-category-tag">
                                        {cat ? cat.name : "Unknown Category"}

                                        <button
                                            className="event-category-delete-btn"
                                            onClick={() => { removeCategory(cat_id); }}
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
    );
};

export default EventFormComp;
