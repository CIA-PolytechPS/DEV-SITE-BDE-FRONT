import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import "@/ui/components/forms/formbtn.component.css";

interface FormBtnCompProps {
    text         : string;
    icon?        : IconDefinition;
    btn_disabled?: boolean;
    btnOnClick?  : () => void;
}

const FormBtnComp: FC<FormBtnCompProps> = ({ text, icon = faFile, btn_disabled = false, btnOnClick }) => {
    return (
        <button
            type="button"
            disabled={btn_disabled}
            onClick={btnOnClick}
        >
            <FontAwesomeIcon icon={icon} />
            <text>{text}</text>
        </button>
    );
};

export default FormBtnComp;
