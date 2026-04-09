import { FC, ChangeEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import "@/ui/components/forms/fields_styles.component.css";

interface TextFieldCompProps {
    id?          : string;
    text         : string;
    name?        : string;
    value?       : string;
    icon?        : IconDefinition;
    placeholder? : string;
    onValueChange: ChangeEventHandler<HTMLInputElement>;
}

const TextFieldComp: FC<TextFieldCompProps> = (props: TextFieldCompProps) => {
    return (
        <div className="form-field">
            <FontAwesomeIcon icon={props.icon ?? faFile} />

            <label htmlFor={props.id}>
                {props.text}
            </label>

            <input
                id={props.id}
                name={props.name}
                value={props.value}
                type="text"
                placeholder={props.placeholder}
                onChange={props.onValueChange}
            />
        </div>
    );
};

export default TextFieldComp;
