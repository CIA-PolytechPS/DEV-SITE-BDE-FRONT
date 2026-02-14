import { FC, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "@/ui/components/forms/textfield.component.css";

interface TimeFieldCompProps {
    text          : string;
    default_value?: string;
    icon?         : IconDefinition;
}

const DateFieldComp: FC<TimeFieldCompProps> = ({ text, default_value = "", icon = faCalendar }) => {
    useEffect(() => {
        console.log("Loaded: InfobarComp");
    }, []);

    useEffect(() => {
        console.log("Rendered: InfobarComp");
    });

    return (
        <div className="form-field form-field-date">
            <FontAwesomeIcon icon={icon} />

            <label>
                {text}
            </label>

            <input name="myInput" defaultValue={default_value} type="date" />
        </div>
    );
};

export default DateFieldComp;
