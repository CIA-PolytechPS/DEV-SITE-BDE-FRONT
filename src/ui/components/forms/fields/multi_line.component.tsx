import { FC, ChangeEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import "@/ui/components/forms/fields_styles.component.css";

interface MultiLineTextFieldCompProps {
    id           : string;
    name         : string;
    text         : string;
    value        : string;
    icon?        : IconDefinition;
    placeholder? : string;
    onValueChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const MultiLineTextFieldComp: FC<MultiLineTextFieldCompProps> = (props: MultiLineTextFieldCompProps) => {
    return (
        <div className="form-field multi-line-text-field">
            <label htmlFor={props.id}>
                <FontAwesomeIcon icon={props.icon ?? faHashtag} /> {props.text}
            </label>

            <textarea
                id={props.id}
                name={props.name}
                value={props.value}
                rows={4}
                placeholder={props.placeholder}
                onChange={props.onValueChange}
            />
        </div>
    );
};

export default MultiLineTextFieldComp;
