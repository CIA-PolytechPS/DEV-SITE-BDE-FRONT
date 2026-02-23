import { FC, useEffect, ChangeEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import "@/ui/components/forms/textfield.component.css";

interface NumberFieldCompProps {
    id?           : string;
    text          : string;
    name?         : string;
    value?        : number;
    default_value?: string;
    icon?         : IconDefinition;
    onChange?     : ChangeEventHandler<HTMLInputElement>;
}

const NumberFieldComp: FC<NumberFieldCompProps> = ({ id = "", text, value = 0, default_value = "", icon = faHashtag, onChange, name = "" }) => {
    useEffect(() => {
        console.log("Loaded: InfobarComp");
    }, []);

    useEffect(() => {
        console.log("Rendered: InfobarComp");
    });

    return (
        <div className="form-field form-field-number">
            <FontAwesomeIcon icon={icon} />

            <label htmlFor={id}>
                {text}
            </label>

            <input
                id={id}
                name={name}
                value={value}
                defaultValue={default_value}
                type="number"
                min="0"
                onChange={onChange}
            />
        </div>
    );
};

export default NumberFieldComp;
