import { FC, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import "@/ui/components/forms/textfield.component.css";

interface NumberFieldCompProps {
    text          : string;
    default_value?: string;
    icon?         : IconDefinition;
}

const NumberFieldComp: FC<NumberFieldCompProps> = ({ text, default_value = "", icon = faHashtag }) => {
    useEffect(() => {
        console.log("Loaded: InfobarComp");
    }, []);

    useEffect(() => {
        console.log("Rendered: InfobarComp");
    });

    return (
        <div className="form-field form-field-number">
            <FontAwesomeIcon icon={icon} />

            <label>
                {text}
            </label>

            <input name="myInput" defaultValue={default_value} type="number" />
        </div>
    );
};

export default NumberFieldComp;
