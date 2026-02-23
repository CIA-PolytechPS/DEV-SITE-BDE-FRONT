import { FC, ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "@/ui/components/forms/textfield.component.css";

interface BoxDownFieldCompProps {
    text             : string;
    default_value?   : string;
    icon?            : IconDefinition;
    values           : string[];
    valueChangeEvent?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const BoxDownFieldComp: FC<BoxDownFieldCompProps> = ({ text, icon = faPen, default_value = "", values = [], valueChangeEvent }) => {
    return (
        <div className="form-field">
            <text><FontAwesomeIcon icon={icon} /> {text}</text>

            <select id="cars" name="cars" onChange={valueChangeEvent} defaultValue={default_value}>
                {values.map((value) => {
                    return <option value={value}>{value}</option>;
                })}
            </select>
        </div>
    );
};

export default BoxDownFieldComp;
