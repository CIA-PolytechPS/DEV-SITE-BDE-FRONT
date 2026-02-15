import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import "@/ui/components/forms/textfield.component.css";

interface MultiLineTextFieldCompProps {
    text          : string;
    default_value?: string;
    icon?         : IconDefinition;
}

const MultiLineTextFieldComp: FC<MultiLineTextFieldCompProps> = ({ text, default_value = "", icon = faHashtag }) => {
    return (
        <div className="form-field multi-line-text-field">
            <label>
                <FontAwesomeIcon icon={icon} /> {text}
            </label>

            <textarea name="myInput" defaultValue={default_value} />
        </div>
    );
};

export default MultiLineTextFieldComp;
