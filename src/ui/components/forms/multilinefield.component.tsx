import { FC, ChangeEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import "@/ui/components/forms/textfield.component.css";

interface MultiLineTextFieldCompProps {
    id            : string;
    name          : string;
    text          : string;
    value         : string;
    default_value?: string;
    icon?         : IconDefinition;
    placeholder?  : string;
    onValueChange : ChangeEventHandler<HTMLTextAreaElement>;
}

const MultiLineTextFieldComp: FC<MultiLineTextFieldCompProps> = (
    { id, name = "", text, value = "", default_value = "", icon = faHashtag, placeholder = "", onValueChange },
) => {
    return (
        <div className="form-field multi-line-text-field">
            <label htmlFor={id}>
                <FontAwesomeIcon icon={icon} /> {text}
            </label>

            <textarea
                id={id}
                name={name}
                value={value}
                defaultValue={default_value}
                rows={4}
                placeholder={placeholder}
                onChange={onValueChange}
            />
        </div>
    );
};

export default MultiLineTextFieldComp;
