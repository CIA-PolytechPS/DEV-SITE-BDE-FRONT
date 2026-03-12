import { FC, ChangeEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import "@/ui/components/forms/textfield.component.css";

interface TextFieldCompProps {
    id?           : string;
    text          : string;
    name?         : string;
    value?        : string;
    default_value?: string;
    icon?         : IconDefinition;
    placeholder?  : string;
    onValueChange : ChangeEventHandler<HTMLInputElement>;
}

const TextFieldComp: FC<TextFieldCompProps> = (
    { id = "", name = "", text, value = "", default_value = "", icon = faFile, placeholder = "", onValueChange },
) => {
    return (
        <div className="form-field">
            <FontAwesomeIcon icon={icon} />

            <label htmlFor={id}>
                {text}
            </label>

            <input
                id={id}
                name={name}
                value={value}
                defaultValue={default_value}
                type="text"
                placeholder={placeholder}
                onChange={onValueChange}
            />
        </div>
    );
};

export default TextFieldComp;
