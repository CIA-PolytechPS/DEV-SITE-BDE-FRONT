import { FC, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import "@/ui/components/forms/textfield.component.css";

interface TextFieldCompProps {
    text          : string;
    default_value?: string;
    icon?         : IconDefinition;
}

const TextFieldComp: FC<TextFieldCompProps> = ({ text, default_value = "", icon = faFile }) => {
    useEffect(() => {
        console.log("Loaded: InfobarComp");
    }, []);

    useEffect(() => {
        console.log("Rendered: InfobarComp");
    });

    return (
        <div className="form-field">
            <FontAwesomeIcon icon={icon} />

            <label>
                {text}
            </label>

            <input name="myInput" defaultValue={default_value} type="text" />
        </div>
    );
};

export default TextFieldComp;
