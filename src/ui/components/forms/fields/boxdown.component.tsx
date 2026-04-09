import { FC, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "@/ui/components/forms/fields_styles.component.css";

interface BoxDownFieldCompProps {
    id?              : string;
    text             : string;
    name?            : string;
    default_value?   : string;
    icon?            : IconDefinition;
    values           : string[];
    valueChangeEvent?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const BoxDownFieldComp: FC<BoxDownFieldCompProps> = (props: BoxDownFieldCompProps) => {
    return (
        <div className="form-field">
            <span><FontAwesomeIcon icon={props.icon ?? faPen} /> {props.text}</span>

            <select id={props.id} name={props.name} onChange={props.valueChangeEvent} defaultValue={props.default_value}>
                {props.values?.map((value) => {
                    return (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default BoxDownFieldComp;
