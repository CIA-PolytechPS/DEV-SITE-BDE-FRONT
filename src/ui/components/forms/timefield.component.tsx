import { FC, ChangeEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { timeToInputFormat } from "@/shared/utils/common/date.utils";

import "@/ui/components/forms/textfield.component.css";

interface TimeFieldCompProps {
    id            : string;
    name          : string;
    text          : string;
    value?        : string | Date;
    default_value?: string;
    icon?         : IconDefinition;
    onValueChange : ChangeEventHandler<HTMLInputElement>;
}

const TimeFieldComp: FC<TimeFieldCompProps> = ({
    id, name, text, value = "", default_value = "", icon = faClock, onValueChange,
}) => {
    return (
        <div className="form-field form-field-time">
            <FontAwesomeIcon icon={icon} />
            <label htmlFor={id}>{text}</label>

            <input
                id={id}
                name={name}
                value={timeToInputFormat(value)}
                defaultValue={default_value}
                type="time"
                onChange={onValueChange}
            />
        </div>
    );
};

export default TimeFieldComp;
