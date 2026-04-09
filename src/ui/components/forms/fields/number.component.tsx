import { FC, ChangeEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import "@/ui/components/forms/fields_styles.component.css";

interface NumberFieldCompProps {
    id?      : string;
    text     : string;
    name?    : string;
    value?   : number;
    icon?    : IconDefinition;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const NumberFieldComp: FC<NumberFieldCompProps> = (props: NumberFieldCompProps) => {
    return (
        <div className="form-field form-field-number">
            <FontAwesomeIcon icon={props.icon ?? faHashtag} />

            <label htmlFor={props.id}>
                {props.text}
            </label>

            <input
                id={props.id}
                name={props.name}
                value={props.value}
                type="number"
                min="0"
                onChange={props.onChange}
            />
        </div>
    );
};

export default NumberFieldComp;
