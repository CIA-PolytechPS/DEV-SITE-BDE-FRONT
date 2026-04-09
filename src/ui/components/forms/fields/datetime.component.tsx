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

const DatetimeFieldComp: FC<DatetimeFieldCompProps> = (props: DatetimeFieldCompProps) => {
    return (
        <div className="form-field form-field-date">
            <FontAwesomeIcon icon={props.icon ?? faCalendar} />

            <label htmlFor={props.id}>
                {props.text}
            </label>

            <input
                id={props.id}
                name={props.name}
                value={dateToDatetimeLocalString(props.value)}
                type="datetime-local"
                onChange={props.onValueChange}
            />
        </div>
    );
};

export default DatetimeFieldComp;
