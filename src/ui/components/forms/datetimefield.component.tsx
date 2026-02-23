import { FC, useEffect, ChangeEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

import { dateToDatetimeLocalString } from "@/shared/utils/common/date.utils";

import "@/ui/components/forms/textfield.component.css";

interface DatetimeFieldCompProps {
    id           : string;
    name         : string;
    text         : string;
    value?       : Date;
    icon?        : IconDefinition;
    onValueChange: ChangeEventHandler<HTMLInputElement>;
}

const DatetimeFieldComp: FC<DatetimeFieldCompProps> = ({ id, name, text, value = new Date(), icon = faCalendar, onValueChange }) => {
    useEffect(() => {
        console.log("Loaded: DatetimeFieldComp");
    }, []);

    useEffect(() => {
        console.log("Rendered: DatetimeFieldComp");
    });

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

                /*
                 * onChange={(e: ChangeEvent<HTMLInputElement>) => {
                 *     const { value } = e.target;
                 *     console.log("test", value)
                 * }}
                 * onBlur={onValueChange}
                 */
            />
        </div>
    );
};

export default DatetimeFieldComp;
