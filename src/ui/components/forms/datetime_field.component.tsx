import { FC, ChangeEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import { dateToDatetimeLocalString } from "@/shared/utils/common/date.utils";

import "@/ui/components/forms/fields_styles.component.css";

interface DatetimeFieldCompProps {
    id           : string;
    name         : string;
    text         : string;
    value?       : string;
    icon?        : IconDefinition;
    onValueChange: ChangeEventHandler<HTMLInputElement>;
}

const DatetimeFieldComp: FC<DatetimeFieldCompProps> = ({ id, name, text, value = "", icon = faCalendar, onValueChange }) => {
    return (
        <div className="form-field form-field-date">
            <FontAwesomeIcon icon={icon} />

            <label htmlFor={id}>
                {text}
            </label>

            <input
                id={id}
                name={name}
                value={
                    dateToDatetimeLocalString(value)
                }
                type="datetime-local"
                onChange={onValueChange}
            />
        </div>
    );
};

export default DatetimeFieldComp;
