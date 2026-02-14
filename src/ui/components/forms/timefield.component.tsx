import { FC, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "@/ui/components/forms/textfield.component.css";

interface TimeFieldCompProps {
    text          : string;
    default_value?: string;
    icon?         : IconDefinition;
}

const TimeFieldComp: FC<TimeFieldCompProps> = ({ text, default_value = "", icon = faClock }) => {
    useEffect(() => {
        console.log("Loaded: InfobarComp");
    }, []);

    useEffect(() => {
        console.log("Rendered: InfobarComp");
    });

    return (
        <div className="form-field form-field-time">
            <FontAwesomeIcon icon={icon} />

            <label>
                {text}
            </label>

            <input name="myInput" defaultValue={default_value} type="time" />
        </div>
    );
};

export default TimeFieldComp;
